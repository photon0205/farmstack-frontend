const labels = {
  en: {
    common: {
      submit: "Submit",
      cancel: "Cancel",
      update: "Update",
      back: "Back",
      finishLater: "Finish later",
    },
    login: {
      signup_header: "Let's build a datahub together",
    },
    navbar: {
      Participants: "Participants",
      NetworkActivity: "Network activity",
      Support: "Support",
      datasets: "Datasets",
      connectors: "Connectors",
      Settings: "Settings",
      Signout: "Sign out",
      Signin: "Sign in",
      SigninAsAdmin: "Login as admin",
      SigninAsParticipant: "Login as participant",
      Login: "Login",
      helpline: "1800 1100 1200 1912",
      legal: "Legal",
      contact: "Contact",
      apply_for_participant: "Apply for participant",
      Dashboard: "Dashboard",
    },
    addparticipants: {
      first_heading: "Add participants organisation details",
      second_heading: "Add participants root user details",
      third_heading: "Add participant's subscription length to the datahub",
      fourth_heading: "Add participant's user type",
      organisation_name: "Organisation name",
      email: "Email Id",
      website_link: "Website link",
      organisation_address: "Organisation address",
      country: "Country",
      pincode: "PIN code",
      first_name: "First name",
      last_name: "Last name",
      contact_number: "Contact number",
      subscripiton_length: "Subscription length",
      firstText: "Add new participant",
      secondText:
        "Add details about your dataset and make it discoverable to other users of our network.",
      is_trusted: "Is trusted",
    },
    editparticipants: {
      first_heading: "Edit participants organisation details",
      second_heading: "Edit participants root user details",
      third_heading: "Edit participant's subscription length to the datahub",
      fourth_heading: "Edit participant's user type",
    },
    editcosteward: {
      first_heading: "Edit Co-Steward details",
      second_heading: "Edit Co-Steward user details",
    },
    viewparticipants: {
      first_heading: "Participant organisation details",
      second_heading: "Participant root user details",
      third_heading: "Participant's subscription length to the datahub",
      fourth_heading: "Participant's user is Trusted",
      organisation_name: "Organisation name",
      email: "Email id",
      website_link: "Website link",
      organisation_address: "Organisation address",
      country: "Country",
      pincode: "PIN code",
      first_name: "First name",
      last_name: "Last name",
      contact_number: "Contact number",
      subscripiton_length: "Subscription length",
      delete_participant: "Delete participants",
      delete_msg: "Are you sure you want to delete the participant?",
      second_delete_msg:
        "The participant's account will be deleted from the system, together with the organization's information, users, datasets, and connectors.",
      third_delete_msg:
        "The participant's account in the datahub will no longer be accessible.",
    },
    viewCoSteward: {
      first_heading: "Co-steward details",
      second_heading: "Co-steward user details",
      delete_coSteward: "Delete Co-Steward",
      delete_msg: "Are you sure you want to delete the Co-Steward?",
      second_delete_msg:
        "The Co-Steward's account will be deleted from the system, together with the organization's information, users, datasets, and connectors.",
      third_delete_msg:
        "The Co-Steward's account in the datahub will no longer be accessible.",

    },
    inviteParticipants: {
      first_heading: "Invite participants",
      second_heading: "Invite message",
    },
    settings: {
      heading: "Add new member",
      editheading: "Edit member details",
      email: "Email id",
      first_name: "First name",
      last_name: "Last name",
      role: "Role",
      delete_member: "Delete Member",
      delete_msg: "Are you sure you want to delete the team member?",
      second_delete_msg:
        "This action will delete the member’s account from the system.",
      third_delete_msg:
        "The member's account will no longer be usable in the datahub.",
      firstText: "Add new member",
      secondText:
        "Add details about your dataset and make it discoverable to other users of our network.",
    },
    account_settings: {
      email: "Email",
      first_name: "First name",
      last_name: "Last name",
      contact: "Contact number",
    },
    org_settings: {
      email: "Organisation Mail ID",
      org_name: "Organisation name",
      address: "Organisation address",
      contact: "Organisation contact number",
      city: "City",
      pincode: "PIN code",
      org_des: "Organisation description",
      website: "Organisation website *",
    },

    support: {
      heading: "List of tickets",
      filter: "Filter",
      all: "All",
      Status: "Status",
      Category: "Category",
      open_status: "Open status",
      close_status: "Close status",
      hold_status: "Hold status",
      User_Accounts: "User accounts",
      Datasets: "Datasets",
      Usage_Policy: "Usage policy",
      Certificate: "Certificate",
      Connectors: "Connectors",
      Others: "Others",
      date: "By date",
    },
    sessiontimeout: {
      heading: "Session has expired",
      secondmainheading: "Oops!",
      thirdmainheading: "Your login session has expired, please sign in again.",
    },
    error: {
      heading: "Oops!",
      secondmainheading: "Someting went wrong!",
      thirdmainheading:
        "Please try again later or contact to support@farmstack.co",
    },
    dataset: {
      name: "Dataset name",
      description: "Description *",
      Data_Category: "Data category *",
      Crop_data: "Crop data",
      Practice_data: "Practice data",
      Farmer_profile: "Farmer profile",
      Land_records: "Land records",
      Cultivation_data: "Cultivation data",
      Livestock: "Livestock",
      Diary: "Dairy",
      Poultry: "Poultry",
      Other: "Other",
      data_access: "Data access type",
      private: "Private",
      public: "Public",
      Soil_data: "Soil data",
      Weather_data: "Weather data",
      Research_data: "Research data",
      Geography: "Geography",
      Crop_Detail: "Value Chain",
      Value_Chain: "Value chain",
      data: "Actual age of data",
      Constantly_updating: "Constantly updating",
      three: "3 months",
      six: "6 months",
      nine: "9 months",
      twelve: "12 months",
      Interval: "Data capture interval",
      Start_Date: "Start date ",
      End_Date: "End date ",
      Records: " Number of rows ",
      Availablity: "Connector availablity",
      Available: "Available",
      Not_Available: "Not available",
      Upload_dataset: " Upload sample datasets *",
      upload_public_dataset: " Upload datasets *",
      visiblity: "Data Visibility",
      filter: "Filter",
      category: "Category",
      subcategory: "Subcategory",
      geography: "Geography",
      age: "Age",
      crop: "Crop",
      search: "Search",
      datasets: "Datasets",
      enabled: "Enabled",
      disbaled: "Disabled",
      status: "Status",
      for_review: "For review",
      rejected: "Rejected",
      approved: "Approved",
      organisation_name: "Organization name",
      published_on: "Published on",
      age_of_data: "Age of data",
      crop_details: "Value Chain",
      add_dataset: "Add new dataset",
      add_dataset_text:
        "Add details about your dataset and make it discoverable to other users of our network.",
      no_dataset_text1: "Currently, there are no datasets available.",
      no_dataset_text2: "Add your dataset.",
      private_data_warning:
        "This table's sample dataset is solely meant to be used as a source of information." +
        "Despite the fact that accuracy is a goal,the steward is not accountable for the information. Please let" +
        "the admin know if you come across any information that you think is inaccurate.",
      public_data_warning:
        "This table's dataset is solely meant to be used as a source of information." +
        "Despite the fact that accuracy is a goal,the steward is not accountable for the information. Please let" +
        "the admin know if you come across any information that you think is inaccurate.",
    },
    dashboard: {
      organisation_details: "Organisation details",
      add_team_members: "Add team members",
      invite_members: "Invite participants",
      update_branding_details: "Update branding details",
      to_do_list: "To do list",
      total_no_of_participants: "Total no. of participants",
      total_no_of_datasets: "Total no. of datasets",
      total_no_of_active_connectors: "Total no. of active connectors",
      total_amount_of_data_exchange: "Total amount of data exchange",
      datasets_title: "Datasets",
      dataset_category: "Dataset category",
      data_exchange_trends: "Data exchange trends",
      support_request: " Support request",
      connector_statics: "Connector statics",
      period: "Period",
      day: "Day",
      month: "Month",
      yearly: "Yearly",
      week: "Week",
      no_data_available: "There is no data at this moment!",
      dataset_cat_info:
        "Each bar graph dataset segment includes multiple categorical variable representing a distinct category within the larger data set.",
      dataset_exchange_trend:
        "These data and analytics (D&A) trends will allow you to periodically monitor the frequency of connections and data transfer.",
    },
    connector: {
      filter: "Filter",
      department: "Department",
      projects: "Projects",
      connector_type: "Connector type",
      connector_status: "Connector status",
      search: "Search",

      project: "Project",
      status: "Status",
      connector_name: "Connector name",
      project_name: "Project name",
      department_name: "Department name",
      configure_connector: "Configure a new connector",
      configure_connector_text:
        "Configure a new connector to provide and consume data securely.",
      no_connector_text1: "Currently, there are no connectors available.",
      no_connector_text2: "Configure new connector.",
      no_dataset_text1:
        "You have not created a dataset for which you can create a connector",
      click_here: "Click Here",
      no_dataset_text2: " to get started!",

      status_install_certificate: "install certificate",
      status_unpaired: "unpaired",
      status_awaiting_approval: "awaiting for approval",
      status_paired: "paired",
      status_pairing_request_received: "pairing request received",
      status_rejected: "rejected",
    },
    guestUser: {
      contact_us: "Contact us",
      touch_with_us: "Touch with us",
      datahub_admin_name: "Datahub admin name",
      datahub_admin_email: "Datahub admin email",
      datahub_admin_phone: "Datahub admin phone",
      organization_name: " Organisation name",
      country: "Country",
      city: "City",
      address: "Address",
      pin_code: "PIN code",
      email: "Email",
      phone: "Phone",
      website: "Website",
      say_hello: "Say hello!",
      first_name: "First name",
      last_name: "Last name",
      contact_number: "Contact number",
      subject: "Subject",
      become_a_participant: "Become a participant (data provider / consumer)",
      other_queries: "Other queries (describe your query in detail)",
      describe_your_query: "Describe your query",
      submit: "Submit",
      cancel: "Cancel",
    },
    connector_form: {
      connectorType: " Connector type * ",
      selectDataset: "Select dataset *",
      connectorName: "Connector name ",
      addDepartment: " + Add department",
      addProject: " + Add project ",
      selectDepartment: "  Select department ",
      selectProject: " Select project ",
      docker: "Docker image url  ",
      port: "Application port ",
      des: "Description",
      submit: "Save and request certificate",
    },
    pair_with_component: {
      pair_with: "Pair with",
      connector_name: "Connector name",
      connector_type: "Connector type",
      dataset_name: "Dataset name",
      department_name: "Department name",
      project_name: "Project name",
      certificate_status: "Certificate status",
      docker_image_url: "Docker image url",
      application_port: "Application port",
      hash_usage_policy: "Hash (usage policy)",
      participant_org_name: "Participant organisation name",
      participant_org_website: "Participant organisation website",
      send_pairing_request: "Send pairing request",
      cancel: "Cancel",
      select_provider_connector: "Select provider connector",
    },
    department: {
      heading: "Add a department",
      editheading: "Edit department",
      department_name: "Department name",
      description: "Department description",
      department_description: "Description",
      delete_department: "Delete department",
      delete_msg: "Are you sure, you want to delete the department?",
      second_delete_msg:
        "This action will delete the department from the system.",
      third_delete_msg:
        "The department will no longer be able to use in your acoount.",
      firstText: "Add new department",
      secondText:
        "Create a new department that will be used to categorise various activites",
      editbutton: "Edit department",
      deletebutton: "Delete department",
      viewheading: "Department details",
    },
    project: {
      department: "Department",
      project: "Project",
      description: "Description",
      add_project: "Add new project",
      add_project_text2:
        "Add details about your project and make it discoverable to other users of pour network.",
      no_project_text1: "Currently, there are no projects available.",
      no_project_text2: "Add new Project.",
      select_department: "Select Department *",
      project_name: "Project Name *",
      project_des: "Project Description *",
      submit: "Submit",
      cancel: "Cancel",
      delete_project: "Delete Project",
      delete_msg: "Are you sure you want to delete the project?",
      second_delete_msg: "This action will delete the project from the system.",
      third_delete_msg: "The project will no longer present in your account.",
    },
    co_steward: {
      add_co_steward: "Add new Co-Steward",
      add_co_steward_description:  "Add details about your Co-Steward and make it discoverable to other users of pour network.",
      first_heading: "Co-Steward organisation details",
      second_heading: "Co-Steward root user details",
      third_heading: "Co-Steward's subscription length to the datahub",
      organisation_name: "Organisation name",
      email: "Email id",
      website_link: "Website link",
      organisation_address: "Organisation address",
      country: "Country",
      pincode: "PIN code",
      first_name: "First name",
      last_name: "Last name",
      contact_number: "Contact number",
    }
  },
};
export default labels;
