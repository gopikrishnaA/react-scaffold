
export const isProduction = () => process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'uat' ||
  process.env.NODE_ENV === 'sit'

export const IMAGES_FORMAT = {
  'GIF': 'image/gif',
  'PNG': 'image/jpeg',
  'JPEG': 'image/jpg',
  'JPG': 'image/png'
}
