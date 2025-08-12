import ImageOne from "@/assets/image8.jpeg";
import FatherImage from "@/assets/image9.jpeg";
import MotherImage from "@/assets/motherImage.jpeg";
import BrotherImage from "@/assets/image6.jpeg";
import MaternalImage from "@/assets/mamaImage.jpeg";

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
    height: "5'9 ft",
    weight: "75 kg",
    complexion: "Fair",
    bodyType: "Athletic",
    address: {
      line1: "“Shivam”, St no:20/11",
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
      photo:FatherImage?.src,
    },
    {
      relation: "Mother",
      name: "Sheetalben Bharatbhai Gondaliya",
      occupation: "Homemaker",
      photo:
        MotherImage?.src,
    },
    {
      relation: "Brother",
      name: "Yash Bharatbhai Gondaliya",
      notes: "Younger Brother",
      photo:
      BrotherImage?.src,
    },
    {
      relation: "Maternal",
      name: "Shaileshbhai Popatbhai Undhad",
      notes: "Rajkot",
      photo:
      MaternalImage?.src,
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
