const getDiscount = (discountPrice, regularPrice) => {
  return Math.round((regularPrice - discountPrice) * 100 /(regularPrice * 5)) * 5
}

export default getDiscount