import { FormikProps } from "formik";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export interface FormValues {
  id: string;
  image: {
    name: string;
    url: string;
  };
  textBottom: string;
  textTop: string;
}
export interface MemeContainerProps {
  memeContainerRef: React.RefObject<HTMLDivElement>;
  formik: FormikProps<FormValues>;
  colorTextTop: string;
  colorTextBottom: string;
  alignTextTop: string;
  alignTextBottom: string;
  fontFamilyTop: string;
  fontFamilyBottom: string;
  fontSizeTop: string;
  fontSizeBottom: string;
  textTop: string;
  textBottom: string;
}

export interface UploadFileInputProps {
  formik: FormikProps<FormValues>;
}

export interface CustomTextAreaProps {
  formik: FormikProps<FormValues>;
  children: ReactNode;
  placeholder: string;
  fieldName: string;
}
export interface TemplatesDataProps {
  id: string;
  image: {
    name: string;
    url: string;
  };
  textBottom: string;
  textTop: string;
}
export interface TemplateItemProps {
  template: TemplatesDataProps;
  setSelectedTemplate: (template: TemplatesDataProps) => void;
  onModalOpen: () => void;
}
export interface TemplateListProps {
  templates: TemplatesDataProps[];
  setSelectedTemplate: (template: TemplatesDataProps) => void;
  onModalOpen: () => void;
}

export interface UploadFormProps {
  templates: TemplatesDataProps[];
  setTemplates: React.Dispatch<React.SetStateAction<TemplatesDataProps[]>>;
  onClose: () => void;
  isOpen: boolean;
}

export interface HomeBannerProps {
  onDrawerOpen: () => void;
}

export interface CustomMenuProps {
  customOptions: { id: string; value: string; label: string }[];
  setCustomOption: (option: string) => void;
  menuButtonIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
  menuButtonIconRight?: ReactElement<any, string | JSXElementConstructor<any>>;
  buttonLabel?: string;
  tooltipLabel: string;
  onClick?: (selectedFileExtension: string) => void;
  disabled?: boolean;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTemplate: any;
  setSelectedTemplate: (image: any) => void;
  templates: any;
}
export interface NavIconLinkProps {
  icon: React.ReactNode;
  children?: React.ReactNode;
  url: string;
}

export interface ControlPanelProps {
  setAlignText: (alignText: string) => void;
  selectFontOptions: { id: string; value: string; label: string }[];
  setCustomOption: (option: string) => void;
  fontSizeOptions: { id: string; value: string; label: string }[];
  setFontSize: (fontSize: string) => void;
  setColorText: (colorText: string) => void;
  textColor: string;
}
export interface CustomTooltipProps {
  children: React.ReactNode;
  label: string;
}

export interface WrapperProps {
  children: React.ReactNode;
  padding?: string;
}
