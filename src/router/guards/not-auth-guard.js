export default (to, from, next) => {
  if (!!localStorage.getItem('token')) {
    next('/home')
  } else {
    next()
  }
}
