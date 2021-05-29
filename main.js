const arr = [
  { id: 20210201000001, title: 'Sample' },
  { id: 20210101000000, title: 'Sample' },
  { id: 20210101000001, title: 'Sample' }
]

console.log(arr)

const t = arr.sort((a,b) => {
  if (a.id < b.id) {
    return 1
  } else {
    return -1
  }
})

console.log(t)
