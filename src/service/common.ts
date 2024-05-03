export const defaultUrl = process.env.NEXT_PUBLIC_API_URL

export interface CommonResponseData {
  success: boolean
  message: string
}

export const roleJson = [
  {
    id: "4a2a60d7-6fe4-4447-99c1-d7d33a96b94f",
    role: "Super_Admin",
  },
  {
    id: "37fc9d6a-8552-483e-ba00-b235b79bbe4c",
    role: "Vendor",
  },
  {
    id: "c19bbc5f-5817-45ec-8e27-dc448b4fb548",
    role: "Branch",
  },
  {
    id: "a630d396-bcec-43da-b4a0-77938e593c29",
    role: "Staff",
  },
  {
    id: "292f9ae9-9abd-4094-88fe-d19385993a84",
    role: "Delivery",
  },
  {
    id: "30cd7f66-e2f0-443c-8fb7-0166d1368398",
    role: "User",
  },
]

export const adminSidebar = [
  {
    id: "018ee5c3-f016-74fc-8ffe-cf8d52287a91",
    role_id: "37fc9d6a-8552-483e-ba00-b235b79bbe4c",
    permissions: [
      "018ee63b-b5b2-707c-a721-5dc2326c029e",
      "018ee6cd-b005-716a-82bf-1186de09c643",
      "018ee6cd-b005-7aa1-9e8f-0a430d565f0e",
      "018ee6cd-b005-7573-adb3-0852b6c732e4",
      "018ee6cd-b005-7d77-87db-027d6b109ee1",
      "018ee6cd-b005-78dd-8336-a411106da5f2",
      "018ee6cd-b005-703a-b214-7281f421754f",
      "018ee6cd-b005-77eb-b6b2-4e013f31bf0a",
      "018ee6cd-b005-7a7e-afa8-80db74c79883",
      "018ee6d1-0caa-72e9-81c3-3496f90b717c",
      "018ee6d1-0caa-7c17-b2c0-f0edb94f77b6",
      "018ee6d1-0caa-763c-9094-ea0ff234d70b",
      "018ee6d1-0caa-7398-9169-c68979fea16c",
      "018ee6cd-b005-78c9-9a13-708cedd75ffa",
    ],
  },
  {
    id: "018ee5c3-f016-73f5-a49b-865adba734f6",
    role_id: "c19bbc5f-5817-45ec-8e27-dc448b4fb548",
    permissions: [
      "018ee63b-b5b2-743c-939d-72b19b53109f",
      "018ee63b-b5b2-7a9d-9ecf-764e861dd239",
      "018ee6cd-b005-72e4-b93d-5d5cebe54250",
      "018ee6cd-b005-7b48-b1c3-1c589eb84a1e",
      "018ee6cd-b005-7bad-88d6-c4891b1b54a0",
      "018ee6cd-b005-7c47-a9ad-24c1f134913a",
      "018ee6cd-b005-7a1e-b0b0-492bd98db1f3",
      "018ee6cd-b005-74ac-886a-be2957a5a290",
      "018ee6cd-b005-7878-8d65-8fe2f73ccdf0",
      "018ee6cd-b005-72d0-ab00-5a386c5b863d",
      "018ee6cd-b005-7929-aa39-ac6b66cdf7a8",
      "018ee6cd-b005-7230-95ba-ffc187538607",
    ],
  },
  {
    id: "018ee5c3-f016-75fc-851d-8f5b6a34213f",
    role_id: "a630d396-bcec-43da-b4a0-77938e593c29",
    permissions: [],
  },
  {
    id: "018ee5c3-f016-72fa-ba48-41f270af8f44",
    role_id: "292f9ae9-9abd-4094-88fe-d19385993a84",
    permissions: [],
  },
  {
    id: "018ee5c3-f016-7fc5-b177-348074a0c45a",
    role_id: "30cd7f66-e2f0-443c-8fb7-0166d1368398",
    permissions: [],
  },
]
