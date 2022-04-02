export default function (element, _this) {
  let bodyH = document.documentElement.clientHeight
  // 元素距离顶部的距离
  let flag = _this.$refs[element] instanceof Array
  let toTopLength = flag
    ? _this.$refs[element][0].getBoundingClientRect().top
    : _this.$refs[element].getBoundingClientRect().top
  let percent = toTopLength / bodyH
  return percent
}
