import faker from 'faker'
import * as U from './util'
const randomId = (): string => faker.random.uuid()
const randomName = (): string => faker.name.findName()
const randomEmail = (): string => faker.internet.email()
const randomAvatarUri = (name?: string): string =>
  U.avatarUrilByName(name ?? randomName())
const randomDate = (): Date => faker.date.recent()
const randomParagraphs = (count: number = 2): string =>
  U.makeArray(count).map(faker.lorem.paragraph).join('\n')
const randomImage = (): string =>
  U.unsplashUrl(U.random(800, 1000), U.random(800, 1000))

export {
  randomId,
  randomName,
  randomEmail,
  randomAvatarUri,
  randomDate,
  randomParagraphs,
  randomImage,
}
