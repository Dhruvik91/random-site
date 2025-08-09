import ImageOne from "@/assets/image5.jpeg";

export interface Address {
  line1: string;
  area: string;
  city: string;
  district?: string;
  postalCode?: string;
}

export interface FamilyMember {
  relation: string;
  name: string;
  occupation?: string;
  notes?: string;
  photo?: string; // optional photo URL
}

export interface Education {
  highestQualification: string;
  institution: string;
  location?: string;
}

export interface Professional {
  occupation: string;
  organization: string;
  workLocation: string;
  experience: string;
}

export interface Lifestyle {
  foodHabits: string;
  hobbies: string[];
}

export interface ContactDetails {
  phone: string;
  email: string;
  fatherPhone?: string;
  linkedin?: string;
  instagram?: string;
  snapchat?: string;
}

export interface PersonalDetails {
  fullName: string;
  dateOfBirth: string;
  age: string;
  height: string;
  weight: string;
  complexion: string;
  bodyType: string;
  address: Address;
  land?: string;
  photo?: string;
}

export interface Biodata {
  personal: PersonalDetails;
  family: FamilyMember[];
  education: Education;
  professional: Professional;
  lifestyle: Lifestyle;
  contact: ContactDetails;
}

export const biodata: Biodata = {
  personal: {
    fullName: "Dhruvik Bharatbhai Gondaliya",
    dateOfBirth: "2002-03-08",
    age: "23 years",
    height: "5'10 ft",
    weight: "79 kg",
    complexion: "Fair",
    bodyType: "Athletic",
    address: {
      line1: "“Shivam”, St no:20 /11",
      area: "Bhojrajpara",
      city: "Gondal",
      district: "Rajkot",
      postalCode: "360311",
    },
    land: "6 Vigha",
    photo:
    ImageOne?.src,
  },
  family: [
    {
      relation: "Father",
      name: "Bharatbhai Damjibhai Gondaliya",
      occupation: "Businessman",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      relation: "Mother",
      name: "Sheetalben Bharatbhai Gondaliya",
      occupation: "Homemaker",
      photo:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      relation: "Brother",
      name: "Yash Bharatbhai Gondaliya",
      notes: "Younger Brother",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      relation: "Maternal",
      name: "Shaileshbhai Popatbhai Undhad",
      notes: "Rajkot",
      photo:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
  education: {
    highestQualification: "B.E. in Computer Science",
    institution: "LDRP Institute of Research and Technology, Gandhinagar",
    location: "Gandhinagar",
  },
  professional: {
    occupation: "Software Engineer",
    organization: "Scaletech Solutions",
    workLocation: "Ahmedabad",
    experience: "2+ Years",
  },
  lifestyle: {
    foodHabits: "Vegetarian",
    hobbies: ["Gym", "Reading", "Coding", "Sketching"],
  },
  contact: {
    phone: "+91 709689981",
    email: "dhruvikgondaliya91@gmail.com",
    fatherPhone: "+91 9925034894",
    linkedin: "",
    instagram: "",
    snapchat: "",
  },
};
