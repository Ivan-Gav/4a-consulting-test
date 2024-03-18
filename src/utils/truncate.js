const truncate = (str, wordsQty = 4) => {
  const arr = str.split(" ");
  if (arr.length <= wordsQty) {
    return str;
  }
  const emoji = /\p{Emoji}/u.test(arr[arr.length - 1])
    ? arr[arr.length - 1]
    : "";
  return arr.splice(0, wordsQty).join(" ") + emoji;
};

export default truncate