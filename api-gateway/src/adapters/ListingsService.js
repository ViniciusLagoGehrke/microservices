import got from "got";

const LISTINGS_SERVICES_URI = "http://listings-service:7100";

export default class ListingsService {
  static async fetchAllListings() {
    const body = await got.get(`${LISTINGS_SERVICES_URI}/listings`).json();
    return body;
  }
}