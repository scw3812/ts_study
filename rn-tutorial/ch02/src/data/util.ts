const makeArray = (length: number) => new Array(length).fill(null)
const random = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min)) + min
}
const unsplashUrl = (width: number, height: number): string =>
  `https://source.unsplash.com/random/${width}X${height}`
const avatarUrilByName = (name: string): string =>
  `https://ui-avatars.com/api/?name=${name.split(' ').join('+')}`

export { makeArray, random, unsplashUrl, avatarUrilByName }
