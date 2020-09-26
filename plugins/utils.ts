const convertDate = (dateString: string): string => {
  return `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6, 8)}`
}

export default ({}: any, inject: (arg0: string, arg1: (dateString: string) => string) => void) => {
  inject('convertDate', convertDate)
}
