const getDiscount = (discountPrice, regularPrice) => {
  return Math.round((regularPrice - discountPrice) * 100 /regularPrice)
}

export default getDiscount