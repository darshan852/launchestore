export interface ConfigDetail {
  id: number
  vendor_id: number
  user_firebase_key: string
  staff_firebase_key: string
  delivery_firebase_key: string
  admin_bandle_id: string
  user_bandle_id: string
  key_id: string
  team_id: string
  staff_bandle_id: string
  delivery_bandle_id: string
  google_client_id: string
  google_secret_id: string
  facebook_client_id: string
  facebook_secret_id: string
  android_app_link: string
  ios_app_link: string
  contact_number: string
  contact_email: string
  contact_us_address: string
  facebook_link: string
  twitter_link: string
  google_plus_link: string
  instagram_link: string
  p8_file: string
  firebase_url: string
  firebase_token: string
  firebase_node: string
  createdAt: string
  updatedAt: string
  Vendor: {
    id: number
    server_name: string
  }
}

export interface ConfigTabel {
  twitter_link: string
  facebook_link: string
  instagram_link: string
  server_name: string
  config_id: number
}

export const converConfigTabel = (data: ConfigDetail[]) => {
  const newData: ConfigTabel[] = []

  data.map((obj) => {
    const newObj = {
      twitter_link: obj.twitter_link,
      facebook_link: obj.facebook_link,
      instagram_link: obj.instagram_link,
      server_name: obj.Vendor.server_name,
      config_id: obj.id,
    }
    newData.push(newObj)
  })
  return newData
}

export interface UpdateConfigFormField {
  user_firebase_key: string
  staff_firebase_key: string
  delivery_firebase_key: string
  key_id: string
  team_id: string
  user_bandle_id: string
  staff_bandle_id: string
  admin_bandle_id: string
  delivery_bandle_id: string
  facebook_client_id: string
  facebook_secret_id: string
  google_client_id: string
  google_secret_id: string
  android_app_link: string
  ios_app_link: string
  contact_number: string
  contact_email: string
  contact_us_address: string
  facebook_link: string
  instagram_link: string
  twitter_link: string
  google_plus_link: string
  p8_file: string
  firebase_url: string
  firebase_token: string
  firebase_node: string
}
