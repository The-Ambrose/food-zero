export interface Category {
  id: string
  name: string
  description: string
  disabled: boolean
  image: string
  [key: string]: any
  products: Product[]
}

export interface Product {
  name: string
  description: string
  disabled: boolean
  id: string
  image: string
  price: number
  priority: number
  [key: string]: any
}

export interface CategoryProducts {
  products: Product[]
}

export interface CategoryQuery {
  categories: Category[]
}

export interface StaffMember {
  id: string
  name: string
  description: string
  role: string
  image: string
  [key: string]: any
}

export interface handleFormProps {
  id: string | undefined
  values: any
  mutationName: string
  reloadData?: (data: any) => void
}

export interface StaffQuery {
  staff: StaffMember[]
}

export interface MeatProcess {
  name: string
  description: string
  order: number
  image: string
  [key: string]: any
}

export interface MeatProcessQuery {
  getAllMeatProcess: MeatProcess[]
}

export interface Params {
  address: string
  aboutSectionTitle: string
  aboutSectionParagraph: string
  aboutBannerVideoTitle: string
  aboutBannerVideoParagraph: string
  aboutBannerVideoId: string
  aboutHeaderSectionTitle: string
  aboutHeaderSectionParagraph: string
  aboutHeaderSectionImage: string
  backgroundAbout: string
  backgroundBlog: string
  backgroundBlogDetail: string
  backgroundContact: string
  backgroundCover: string
  backgroundMenu: string
  blogDetailCommentTitle: string
  blogSectionSubtitle: string
  blogSectionTitle: string
  contactSectionSubtitle: string
  contactSectionTitle: string
  contactCover1: string
  contactCover2: string
  email: string
  facebook: string
  homeSection1ImagesText1: string
  homeSection1ImagesText2: string
  homeSection1Paragraph1: string
  homeSection1Paragraph2: string
  homeSection1Subtitle: string
  homeSection1Title: string
  homeSection2ButtonText: string
  homeSection2Subtitle: string
  homeSection2Title: string
  homeSection3Paragraph: string
  homeSection3Title: string
  homeSectionMenuSubtitle: string
  homeSectionMenuTitle: string
  id: string
  instagram: string
  menuSectionSubtitle: string
  menuSectionTitle: string
  phone: string
  titleCommentsHome: string
  twitter: string
  youtube: string
  homeSection3Image1: string
  homeSection3Image2: string
  homeSection3Image3: string
  homeSection1Image1: string
  homeSection1Image2: string
}

export interface ParamsQuery {
  getParams: Params
}

export interface IHome {
  titleCommentsHome: string
  homeSection1Title: string
  homeSection1Subtitle: string
  homeSection1Paragraph1: string
  homeSection1Paragraph2: string
  homeSection1Image1: String
  homeSection1Image2: String
  homeSection1ImagesText1: string
  homeSection1ImagesText2: string
  homeSection2Title: string
  homeSection2Subtitle: string
  homeSection2ButtonText: string
  homeSection3Title: string
  homeSection3Paragraph: string
  homeSection3Image1: String
  homeSection3Image2: String
  homeSection3Image3: String
  homeSectionMenuTitle: string
  homeSectionMenuSubtitle: string
}

export interface IGeneral {
  backgroundCover: string
  address: string
  email: string
  facebook: string
  instagram: string
  phone: string
  twitter: string
  youtube: string
}

export interface IMenu {
  menuSectionSubtitle: string
  menuSectionTitle: string
  backgroundMenu: string
}

export interface IContact {
  contactSectionSubtitle: string
  contactSectionTitle: string
  backgroundContact: string
  contactCover1: string
  contactCover2: string
}

export interface IBlog {
  blogDetailCommentTitle: string
  blogSectionSubtitle: string
  blogSectionTitle: string
  backgroundBlog: string
  backgroundBlogDetail: string
}
export interface IAbout {
  backgroundAbout: string
  aboutSectionTitle: string
  aboutSectionParagraph: string
  aboutBannerVideoTitle: string
  aboutBannerVideoParagraph: string
  aboutBannerVideoId: string
  aboutHeaderSectionTitle: string
  aboutHeaderSectionParagraph: string
  aboutHeaderSectionImage: string
}
export interface ISuscriberQuery {
  suscriber: ISuscriber[]
}
export interface ISuscriber {
  email: string
}
export interface IStaffMember {
  name: string
  description: string
  role: string
  image: string
  staffData: StaffMember[]
}
export interface IMeatProcess {
  name: string
  description: string
  order: number
  image: string
  meatData: MeatProcess[]
}

export interface ICategories {
  name: string
  description: string
  image: string
  categoryData: Category[]
}

export interface IProducts {
  name: string
  description: string
  image: string
  price: string
  priority: string
  category: string
  productsData: Product[]
}