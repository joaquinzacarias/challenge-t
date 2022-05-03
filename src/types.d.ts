
export interface ipApiResponse {
  'status': string
  'country': string
  'countryCode': string
  'region': string
  'regionName': string
  'city': string
  'zip': string
  'lat': number
  'lon': number
  'timezone': string
  'isp': string
  'org': string
  'as': string
  'query': string
}

export type geolocationInfo = Omit<ipApiResponse, 'status', 'query'>
