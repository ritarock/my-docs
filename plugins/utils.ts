const convertDate = (dateString: string): string => {
  return `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6, 8)}`
}

const momveTop = () => {
  window.location.href = '/'
}

// @ts-ignore
export default ({}, inject) => {
  inject('convertDate', convertDate)
  inject('moveTop', momveTop)
}
