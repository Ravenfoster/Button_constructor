import { Danger, Primary, Success, Warning } from './constants'

export const typeClasses = (type, styleArray) => {
  switch (type.checked) {
    case Primary:
      styleArray.push(type.checked)
      break
    case Danger:
      styleArray.push(type.checked)
      break
    case Success:
      styleArray.push(type.checked)
      break
    case Warning:
      styleArray.push(type.checked)
      break
    default: break
  }
}


export const addDouble_Class = (state, styleArray, styleConst) => {
  if (state) {
    const currentType = styleArray[1]
    const index = styleConst[0].indexOf('_')
    const fragment = styleConst[0].slice(index)
    const res = styleConst.find((elem) => elem === `${currentType}${fragment}`)
    styleArray.push(res)
  }
}

export const addSingleClass = (state, styleArray, classValue) => {
  if (state) {
    styleArray.push(classValue)
  }
}

export const addSingleClassWithLoader = (state, styleArray, loaderArray, classValue) => {
  if (state) {
    styleArray.push(classValue)
    loaderArray.shift()
    loaderArray.push(`${classValue}__loader`)
  }
}

