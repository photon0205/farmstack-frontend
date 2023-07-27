import { rest } from "msw";
import UrlConstants from "../../Constants/UrlConstants";
import { getUserLocal } from "../../Utils/Common";
const getBaseUrl = () => {
  return process.env.REACT_APP_BASEURL;
};

export const micrositeHandler = [
  // pass your url in the first parameter
  rest.post(
    `${UrlConstants.base_url}${UrlConstants.costeward_onboarded_dataset}`,
    (req, res, ctx) => {
      console.log("microsite onboarding dataset", req);
      return res(
        ctx.status(200),
        ctx.json({
          count: 58,
          next: "https://datahubethdev.farmstack.co/be/microsite/datasets/dataset_filters/?page=2",
          previous: null,
          results: [
            {
              id: "f8b8a49b-1298-4cfa-a2a7-9948c26274f4",
              user_id: "d8d99521-30da-4809-8ebb-160ac1f9029f",
              organization_id: "2e7c48b3-4ca0-4d8a-a8af-0d69d99011f0",
              organization: {
                org_email: "nilesh+participant@digitalgreen.org",
                org_description: "dfgfdg",
                name: "nilesh+participant",
                logo: "/media/organizations/logos/d2fo-home-img_DjWEIqN.jpeg",
                address: {
                  city: "",
                  address: "nilesh+participant@digitalgreen.org",
                  country: "Armenia",
                  pincode: "123456",
                },
                phone_number: "+91 12345-67899",
              },
              user: {
                last_name: "",
                first_name: "nilesh+participant@digitalgreen.org",
                email: "nilesh+participant@digitalgreen.org",
                on_boarded_by: null,
              },
              created_at: "2023-07-19T10:39:28.705904Z",
              updated_at: "2023-07-19T10:40:33.790844Z",
              name: "Datastet1",
              description: "deseb",
              category: {},
              geography: {},
              data_capture_start: null,
              data_capture_end: null,
              constantly_update: true,
              is_temp: false,
              user_map: "152d9d44-2207-4328-8c2a-0fed99ec9118",
            },
          ],
        })
      );
    }
  ),
  rest.post(
    `${UrlConstants.base_url}${UrlConstants.guest_dataset_filtered_data}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          count: 58,
          next: "https://datahubethdev.farmstack.co/be/microsite/datasets/dataset_filters/?page=2",
          previous: null,
          results: [
            {
              id: "135c23cc-60df-477e-919c-209c55e6c58d",
              user_id: "0f76cb90-2394-499b-9b60-bf4cad3751a4",
              organization_id: "5c6d28fb-8603-417c-95db-ecf2e85f4f07",
              organization: {
                org_email: "digitalgreen@digitalgreen.com",
                org_description:
                  "Digital Green is a non-profit organization that was founded in 2006 and is based in Koramangala, Bangalore. The organization uses technology to empower smallholder farmers in developing countries by sharing agricultural knowledge and practices.",
                name: "Digital green",
                logo: "/media/organizations/logos/KALRO_PcWNbzH.png",
                address: {
                  city: "",
                  address:
                    "4th block, Koramangala, New Hp Petrol pump, Bangalore",
                  country: "Argentina",
                  pincode: "12345678654321",
                },
                phone_number: "+91 97380-39097",
              },
              user: {
                last_name: "",
                first_name: "asdfg",
                email: "kanhaiya@digitalgreen.org",
                on_boarded_by: null,
              },
              created_at: "2023-06-13T10:23:32.234370Z",
              updated_at: "2023-07-21T05:48:34.707625Z",
              name: "hgfxdzsfxgch",
              description: "uytrseastdyf",
              category: {},
              geography: {},
              data_capture_start: null,
              data_capture_end: null,
              constantly_update: true,
              is_temp: false,
              user_map: "a4afc139-5829-49a4-8131-9021eceb4dd6",
            },
            {
              id: "f8b8a49b-1298-4cfa-a2a7-9948c26274f4",
              user_id: "d8d99521-30da-4809-8ebb-160ac1f9029f",
              organization_id: "2e7c48b3-4ca0-4d8a-a8af-0d69d99011f0",
              organization: {
                org_email: "nilesh+participant@digitalgreen.org",
                org_description: "dfgfdg",
                name: "nilesh+participant",
                logo: "/media/organizations/logos/d2fo-home-img_DjWEIqN.jpeg",
                address: {
                  city: "",
                  address: "nilesh+participant@digitalgreen.org",
                  country: "Armenia",
                  pincode: "123456",
                },
                phone_number: "+91 12345-67899",
              },
              user: {
                last_name: "",
                first_name: "nilesh+participant@digitalgreen.org",
                email: "nilesh+participant@digitalgreen.org",
                on_boarded_by: null,
              },
              created_at: "2023-07-19T10:39:28.705904Z",
              updated_at: "2023-07-19T10:40:33.790844Z",
              name: "Datastet1",
              description: "deseb",
              category: {},
              geography: {},
              data_capture_start: null,
              data_capture_end: null,
              constantly_update: true,
              is_temp: false,
              user_map: "152d9d44-2207-4328-8c2a-0fed99ec9118",
            },
            {
              id: "1892e6c5-b126-4be0-b400-d77baae4ad67",
              user_id: "acc0a9a4-4fba-4d99-aa2e-e98d732c3fd7",
              organization_id: "5158bc4e-cdf5-466a-b491-d1a94894638a",
              organization: {
                org_email: "nilesh@digitalgreen.org",
                org_description: "ffgdgfdgdfgdgdfsbfdfsg",
                name: "dg",
                logo: "/media/organizations/logos/dglogo.png",
                address: {
                  city: "",
                  address: "150277",
                  country: "Anguilla",
                  pincode: "134566",
                },
                phone_number: "+91 12345-67890",
              },
              user: {
                last_name: "",
                first_name: "Nilesh",
                email: "nilesh@digitalgreen.org",
                on_boarded_by: null,
              },
              created_at: "2023-06-27T06:44:16.754167Z",
              updated_at: "2023-07-19T08:37:12.237591Z",
              name: "sdafgdasgadsgadsg",
              description: "dsagdasgadsgdsag",
              category: {},
              geography: {},
              data_capture_start: null,
              data_capture_end: null,
              constantly_update: true,
              is_temp: false,
              user_map: "d7a59916-8824-4bba-bb8e-dbf3ee9f1ac8",
            },
            {
              id: "5328fcbe-665f-46b4-846a-d8032b6e86d1",
              user_id: "74262a78-4b2b-4687-88ab-cba9ac641d37",
              organization_id: "ac35763e-bfce-4bf8-bb26-3c98616600b6",
              organization: {
                org_email: "sohit@digitalgreen.org",
                org_description: "kjhkhkhkhkj",
                name: "new org",
                logo: "/media/organizations/logos/1653272245246.jpeg",
                address: {
                  city: "",
                  address: "org address",
                  country: "India",
                  pincode: "1234565432",
                },
                phone_number: "+91 23423-42343",
              },
              user: {
                last_name: "kumar",
                first_name: "sohit",
                email: "sohit@digitalgreen.org",
                on_boarded_by: null,
              },
              created_at: "2023-07-11T14:13:03.536067Z",
              updated_at: "2023-07-18T04:35:52.157756Z",
              name: "test1",
              description: "test description",
              category: {},
              geography: {},
              data_capture_start: null,
              data_capture_end: null,
              constantly_update: true,
              is_temp: false,
              user_map: "206722c0-4a7e-4415-961a-8fd921eb5342",
            },
            {
              id: "7ebc81d7-530a-4d57-9551-4b20b28c7e54",
              user_id: "8ec1bac3-2171-4222-9b4f-7908626ae109",
              organization_id: "bc29075a-2233-497e-b1b1-1b72f50bac19",
              organization: {
                org_email: "shruth@df.com",
                org_description: "kkkkkkkk",
                name: "DG",
                logo: "/media/organizations/logos/carssss_rRltuAr.jpeg",
                address: {
                  city: "",
                  address: "chennai",
                  country: "American Samoa",
                  pincode: "3333333333",
                },
                phone_number: "+254456789873",
              },
              user: {
                last_name: "",
                first_name: "Shruthi",
                email: "shruthichandran@digitalgreen.org",
                on_boarded_by: null,
              },
              created_at: "2023-07-05T11:11:30.958286Z",
              updated_at: "2023-07-14T12:12:07.808213Z",
              name: "check for view",
              description: "swdcfv",
              category: {
                Horticulture: [
                  "GDHFDHGDFHGF",
                  "dsvxc",
                  "sdxz",
                  "rzdfc",
                  "dvsxc",
                  "sdfxc",
                  "rdzfvxc",
                  "dxdsvxc",
                  "sdzfx",
                ],
              },
              geography: {
                city: {
                  name: "Airds",
                  latitude: "-34.08599000",
                  longitude: "150.83322000",
                  stateCode: "NSW",
                  countryCode: "AU",
                },
                state: {
                  name: "New South Wales",
                  isoCode: "NSW",
                  latitude: "-31.25321830",
                  longitude: "146.92109900",
                  countryCode: "AU",
                },
                country: {
                  flag: "🇦🇺",
                  name: "Australia",
                  isoCode: "AU",
                  currency: "AUD",
                  latitude: "-27.00000000",
                  longitude: "133.00000000",
                  phonecode: "61",
                  timezones: [
                    {
                      tzName: "Macquarie Island Station Time",
                      zoneName: "Antarctica/Macquarie",
                      gmtOffset: 39600,
                      abbreviation: "MIST",
                      gmtOffsetName: "UTC+11:00",
                    },
                    {
                      tzName: "Australian Central Daylight Saving Time",
                      zoneName: "Australia/Adelaide",
                      gmtOffset: 37800,
                      abbreviation: "ACDT",
                      gmtOffsetName: "UTC+10:30",
                    },
                    {
                      tzName: "Australian Eastern Standard Time",
                      zoneName: "Australia/Brisbane",
                      gmtOffset: 36000,
                      abbreviation: "AEST",
                      gmtOffsetName: "UTC+10:00",
                    },
                    {
                      tzName: "Australian Central Daylight Saving Time",
                      zoneName: "Australia/Broken_Hill",
                      gmtOffset: 37800,
                      abbreviation: "ACDT",
                      gmtOffsetName: "UTC+10:30",
                    },
                    {
                      tzName: "Australian Eastern Daylight Saving Time",
                      zoneName: "Australia/Currie",
                      gmtOffset: 39600,
                      abbreviation: "AEDT",
                      gmtOffsetName: "UTC+11:00",
                    },
                    {
                      tzName: "Australian Central Standard Time",
                      zoneName: "Australia/Darwin",
                      gmtOffset: 34200,
                      abbreviation: "ACST",
                      gmtOffsetName: "UTC+09:30",
                    },
                    {
                      tzName:
                        "Australian Central Western Standard Time (Unofficial)",
                      zoneName: "Australia/Eucla",
                      gmtOffset: 31500,
                      abbreviation: "ACWST",
                      gmtOffsetName: "UTC+08:45",
                    },
                    {
                      tzName: "Australian Eastern Daylight Saving Time",
                      zoneName: "Australia/Hobart",
                      gmtOffset: 39600,
                      abbreviation: "AEDT",
                      gmtOffsetName: "UTC+11:00",
                    },
                    {
                      tzName: "Australian Eastern Standard Time",
                      zoneName: "Australia/Lindeman",
                      gmtOffset: 36000,
                      abbreviation: "AEST",
                      gmtOffsetName: "UTC+10:00",
                    },
                    {
                      tzName: "Lord Howe Summer Time",
                      zoneName: "Australia/Lord_Howe",
                      gmtOffset: 39600,
                      abbreviation: "LHST",
                      gmtOffsetName: "UTC+11:00",
                    },
                    {
                      tzName: "Australian Eastern Daylight Saving Time",
                      zoneName: "Australia/Melbourne",
                      gmtOffset: 39600,
                      abbreviation: "AEDT",
                      gmtOffsetName: "UTC+11:00",
                    },
                    {
                      tzName: "Australian Western Standard Time",
                      zoneName: "Australia/Perth",
                      gmtOffset: 28800,
                      abbreviation: "AWST",
                      gmtOffsetName: "UTC+08:00",
                    },
                    {
                      tzName: "Australian Eastern Daylight Saving Time",
                      zoneName: "Australia/Sydney",
                      gmtOffset: 39600,
                      abbreviation: "AEDT",
                      gmtOffsetName: "UTC+11:00",
                    },
                  ],
                },
              },
              data_capture_start: null,
              data_capture_end: null,
              constantly_update: true,
              is_temp: false,
              user_map: "3c9071cb-5fe1-4cdb-8e15-7961c065989b",
            },
          ],
        })
      );
    }
  ),
  rest.get(
    `${UrlConstants.base_url}${UrlConstants.microsite_participant_end_point_new}?co_steward=True`,
    (req, res, ctx) => {
      // get payload form req
      console.log("req in get carousle", req);
      return res(
        ctx.status(200),
        ctx.json({
          count: 14,
          next: "https://datahubethdev.farmstack.co/be/microsite/participant/?co_steward=True&page=2",
          previous: null,
          results: [
            {
              id: "65ffcfd2-acb6-431d-8969-dc53ecfd8723",
              user_id: "26192c83-4cd2-4926-b0e5-c77ea58008d0",
              organization_id: "bb16e2fa-fc56-4430-a479-db5ec81709e0",
              user: {
                id: "26192c83-4cd2-4926-b0e5-c77ea58008d0",
                email: "jai+1@digitalgreen.org",
                first_name: "sdfa",
                last_name: "sf,nsdlkj",
                phone_number: "+91 9996957626",
                role: 6,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "bb16e2fa-fc56-4430-a479-db5ec81709e0",
                name: "Jai's Demo Organization_1",
                org_email: "jai+1@digitalgreen.org",
                address: {
                  city: "",
                  address: "https://datahubethdev.farmstack.co/home/register",
                  country: "India",
                  pincode: "560076",
                },
                phone_number: "+91 86969-57626",
                logo: "/media/organizations/logos/Akasa_Air_Logo.png",
                hero_image: null,
                org_description: "sasadasd",
                website: "https://mail.google.com",
                status: true,
              },
              dataset_count: 0,
              connector_count: 0,
              number_of_participants: 0,
            },
            {
              id: "5a8da492-2a56-4055-b4c7-7a64876f2023",
              user_id: "2fb4be13-a6c8-4f95-8f78-c45320005180",
              organization_id: "d59a06c6-92ae-431d-9903-45807305dc52",
              user: {
                id: "2fb4be13-a6c8-4f95-8f78-c45320005180",
                email: "shruthichandran+co@digitalgreen.org",
                first_name: "monika",
                last_name: "sdfg",
                phone_number: "+91 23456-78976",
                role: 6,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "d59a06c6-92ae-431d-9903-45807305dc52",
                name: "monika org costeward",
                org_email: "monikaorg@sdf.con",
                address: {
                  city: "",
                  address: "sadcfv",
                  country: "Australia",
                  pincode: "2345678",
                },
                phone_number: "+91 23456-78976",
                logo: "/media/organizations/logos/veg.jpeg",
                hero_image: null,
                org_description: "swdefrv",
                website: "www.sdcvf.com",
                status: true,
              },
              dataset_count: 0,
              connector_count: 0,
              number_of_participants: 0,
            },
            {
              id: "6ceb943a-2b97-4084-b467-a613a063a477",
              user_id: "81931fc3-ecc8-4d76-b7b2-f8f2a77dc713",
              organization_id: "a506ddcb-4933-40e0-98f6-a3c1fa72a0c6",
              user: {
                id: "81931fc3-ecc8-4d76-b7b2-f8f2a77dc713",
                email: "nilesh+12@digitalgreen.org",
                first_name: "nilesh+12@digitalgreen.org",
                last_name: "",
                phone_number: "+91 12345-67899",
                role: 6,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "a506ddcb-4933-40e0-98f6-a3c1fa72a0c6",
                name: "nilesh+12@digitalgreen.org",
                org_email: "nilesh+12@digitalgreen.org",
                address: {
                  city: "",
                  address: "nilesh+12@digitalgreen.org",
                  country: "American Samoa",
                  pincode: "123456",
                },
                phone_number: "+91 12345-67899",
                logo: "/media/organizations/logos/d2fo-home-img_1CDiUla.jpeg",
                hero_image: null,
                org_description: "dsafgasdfdsafas",
                website: "adsjflaskd@sad.ds",
                status: true,
              },
              dataset_count: 6,
              connector_count: 0,
              number_of_participants: 7,
            },
            {
              id: "4a38d1b1-868d-4bbf-950a-db62d9350f50",
              user_id: "56695d23-37f2-4cc1-9abb-9051f7a84761",
              organization_id: "c70ea1e1-2af9-4abe-b963-c8917db22b4e",
              user: {
                id: "56695d23-37f2-4cc1-9abb-9051f7a84761",
                email: "shruthichandran+17@digitalgreen.org",
                first_name:
                  "monikasdfrgthygtrfedfrgthyjuhgfergthyjukjyhgfdsfgthyjuyhgfdwefrgthyjuhgfdsfghyjuyhtgrfedwefrgthyjuk",
                last_name: "chandran",
                phone_number: "+91 23456-78909",
                role: 6,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "c70ea1e1-2af9-4abe-b963-c8917db22b4e",
                name: "shru costeward org and something new to check the space",
                org_email: "wdefrg@sdf.com",
                address: {
                  address: "scdvf",
                  country: "Aruba",
                  pincode: "098765432",
                },
                phone_number: "+91 23456-78909",
                logo: "/media/organizations/logos/bitter_VVN9G1p.jpeg",
                hero_image: null,
                org_description: "cdvf",
                website: "www.sdf.com",
                status: true,
              },
              dataset_count: 1,
              connector_count: 0,
              number_of_participants: 2,
            },
            {
              id: "b1d30380-ed2a-47eb-ba71-985dae0183d4",
              user_id: "4131d9e6-bdae-47cb-9ad9-01fe6690095e",
              organization_id: "2e85f49b-ba73-46d8-ba99-c71e97fcb5f0",
              user: {
                id: "4131d9e6-bdae-47cb-9ad9-01fe6690095e",
                email: "nilesh+11@digitalgreen.org",
                first_name: "nilesh+10@digitalgreen.org",
                last_name: "nilesh+10@digitalgreen.org",
                phone_number: "+91 12345-6788",
                role: 6,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "2e85f49b-ba73-46d8-ba99-c71e97fcb5f0",
                name: "nilesh+10@digitalgreen.org",
                org_email: "nilesh+11@digitalgreen.org",
                address: {
                  city: "",
                  address: "nilesh+10@digitalgreen.org",
                  country: "Venezuela, Bolivarian Republic of",
                  pincode: "123456",
                },
                phone_number: "+91 12345-6788",
                logo: "/media/organizations/logos/d2fo-login-img_COBZ9Ad.jpg",
                hero_image: null,
                org_description: "dfsgsrfhsnvb",
                website: "nilesh+10@digitalgreen.org",
                status: true,
              },
              dataset_count: 0,
              connector_count: 0,
              number_of_participants: 1,
            },
          ],
        })
      );
    }
  ),
  rest.get(
    `${UrlConstants.base_url}${UrlConstants.microsite_participant_end_point_new}`,
    (req, res, ctx) => {
      return (
        ctx.status(200),
        ctx.json({
          count: 54,
          next: "https://datahubethdev.farmstack.co/be/microsite/participant/?page=2",
          previous: null,
          results: [
            {
              id: "361d6d8a-a809-4120-aa33-14a213aa4aa1",
              user_id: "581ac959-54d5-4eda-b4f3-1fd2c809b781",
              organization_id: "ec721448-432a-494e-8ca4-aa0b6f4ea804",
              user: {
                id: "581ac959-54d5-4eda-b4f3-1fd2c809b781",
                email: "sohit+p@digitalgreen.org",
                first_name: "Sohit",
                last_name: "Kumar",
                phone_number: "+91 70045-98739",
                role: 3,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "ec721448-432a-494e-8ca4-aa0b6f4ea804",
                name: "Hapat",
                org_email: "sohit@fsghjbkk.com",
                address: {
                  city: "",
                  address: "banaglor",
                  country: "India",
                  pincode: "367786",
                },
                phone_number: "+91 70045-98739",
                logo: "/media/organizations/logos/1653272245246_H8kDH9L.jpeg",
                hero_image: null,
                org_description: "Crazy",
                website: "https://google.com",
                status: true,
              },
              dataset_count: 0,
              connector_count: 0,
              number_of_participants: 0,
            },
            {
              id: "a17951ff-90b0-4c49-b4a6-7702fc633573",
              user_id: "7c1b194d-bf36-4370-acd4-5ce35507970f",
              organization_id: "75e0f1e4-99ba-44df-8bab-bd2d99ba5019",
              user: {
                id: "7c1b194d-bf36-4370-acd4-5ce35507970f",
                email: "akshata+3@digitalgreen.org",
                first_name: "Akshata",
                last_name: "",
                phone_number: "+91 93449-57735",
                role: 3,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "75e0f1e4-99ba-44df-8bab-bd2d99ba5019",
                name: "akshu org",
                org_email: "sdefrghjk@dfg.com",
                address: {
                  city: "",
                  address: "bangalore",
                  country: "Australia",
                  pincode: "234567890",
                },
                phone_number: "+91 93449-57735",
                logo: "/media/organizations/logos/antler-antler-carrier-fallow-deer-hirsch.jpeg",
                hero_image: null,
                org_description: "hi hello",
                website: "https://www.digitalgreen.org",
                status: true,
              },
              dataset_count: 0,
              connector_count: 0,
              number_of_participants: 0,
            },
            {
              id: "7d70e7f2-9c30-4668-922a-6997aa75ac7c",
              user_id: "696db08d-a2ff-4d9c-960c-870b43542109",
              organization_id: "e847e1ac-14b2-4bfc-b256-55773dfad5f1",
              user: {
                id: "696db08d-a2ff-4d9c-960c-870b43542109",
                email: "akshata1@digitalgreen.org",
                first_name: "Akshata",
                last_name: "",
                phone_number: "+91 99720-30784",
                role: 3,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: false,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "e847e1ac-14b2-4bfc-b256-55773dfad5f1",
                name: "Organization",
                org_email: "akshata1@digitalgreen.org",
                address: {
                  address: "DG, Koramangala",
                  country: "",
                  pincode: "789898",
                },
                phone_number: "+91 99720-30784",
                logo: null,
                hero_image: null,
                org_description: null,
                website: "https://www.digitalgreen.org",
                status: true,
              },
              dataset_count: 0,
              connector_count: 0,
              number_of_participants: 0,
            },
            {
              id: "d0bb3072-4f42-4e72-835f-9416e1df1ec2",
              user_id: "dccf135e-cdc3-4412-aa79-a89db0dfa6bc",
              organization_id: "a4e60876-a249-4c45-b13a-7993c2572e27",
              user: {
                id: "dccf135e-cdc3-4412-aa79-a89db0dfa6bc",
                email: "ekta+part@digitalgreen.org",
                first_name: "ekta",
                last_name: "part",
                phone_number: "+91 96114-57777",
                role: 3,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "a4e60876-a249-4c45-b13a-7993c2572e27",
                name: "ekta dummy",
                org_email: "ekta+part@digitalgreen.org",
                address: {
                  city: "",
                  address: "patna",
                  country: "India",
                  pincode: "800001",
                },
                phone_number: "+91 96114-57777",
                logo: "/media/organizations/logos/download_y5chEtC.png",
                hero_image: null,
                org_description: "dhgdhh",
                website: "https://www.google.com",
                status: true,
              },
              dataset_count: 0,
              connector_count: 0,
              number_of_participants: 0,
            },
            {
              id: "69d15a96-3cc2-47b3-bda1-7685c72f371f",
              user_id: "1d36c205-0561-408b-84a7-f79f38e905eb",
              organization_id: "0b5c0fd0-906d-4392-9d5d-d99ca6140dd2",
              user: {
                id: "1d36c205-0561-408b-84a7-f79f38e905eb",
                email: "ugesh@digitalgreen.org",
                first_name: "ugesh",
                last_name: "basa",
                phone_number: "+91 12312-31231",
                role: 3,
                status: true,
                subscription: null,
                profile_picture: null,
                on_boarded: true,
                on_boarded_by: null,
                approval_status: true,
              },
              organization: {
                id: "0b5c0fd0-906d-4392-9d5d-d99ca6140dd2",
                name: "dg@digitalgreen.org",
                org_email: "dg@digitalgreen.org",
                address: {
                  address: "adad",
                  country: "Angola",
                  pincode: "1234567760",
                },
                phone_number: "+91 12312-31231",
                logo: "/media/organizations/logos/Design-Office-Wall-Sticker.jpeg",
                hero_image: null,
                org_description: "<p>adfsgdgfd</p>",
                website: "www.digitalgreen.com",
                status: true,
              },
              dataset_count: 1,
              connector_count: 0,
              number_of_participants: 0,
            },
          ],
        })
      );
    }
  ),
  rest.post(
    `${UrlConstants.base_url}${UrlConstants.microsite_contact_form}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(
          {"Message":"Your query is submitted! Thank you."}
        )
      );
    }
  ),
  rest.get(
    `${UrlConstants.base_url}${UrlConstants.guest_organization_details}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          "user": {
              "first_name": "asdfg",
              "last_name": "",
              "email": "kanhaiya@digitalgreen.org",
              "phone_number": "+91 89768-79231"
          },
          "organization": {
              "name": "Digital green",
              "org_email": "digitalgreen@digitalgreen.com",
              "address": {
                  "city": "",
                  "address": "4th block, Koramangala, New Hp Petrol pump, Bangalore",
                  "country": "Argentina",
                  "pincode": "12345678654321"
              },
              "phone_number": "+91 97380-39097",
              "logo": "/media/organizations/logos/KALRO_PcWNbzH.png",
              "hero_image": null,
              "org_description": "Digital Green is a non-profit organization that was founded in 2006 and is based in Koramangala, Bangalore. The organization uses technology to empower smallholder farmers in developing countries by sharing agricultural knowledge and practices.",
              "website": "https://www.digitalgreen.org",
              "status": true
          }
      })
      );
    }
  ),
  rest.post(`${UrlConstants.base_url}token/refresh/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        access: "refreshed token",
      })
    );
  }),
];
