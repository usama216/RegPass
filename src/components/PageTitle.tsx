import { ReactNode } from "react";


export type IBreadcrumbItem = {
    label: string;
    path?: string;
    active?: boolean;
};

type PageTitleProps = {
    breadCrumbItems?: IBreadcrumbItem[];
    title: string;
    otherItems?: ReactNode;
    centerItems?: ReactNode;
};

const PageTitle = ({ title, centerItems }: PageTitleProps) => {
    return (
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{title}</h3>
            {centerItems != null && centerItems}
          
        </div>
    );
};

export { PageTitle };
