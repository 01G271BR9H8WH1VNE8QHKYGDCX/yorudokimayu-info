import React from "react";
import { LinkItem } from "../../services/discography/ProductService";

type Props = {
    linkItem: LinkItem;
};

const MvLinkButton: React.FC<Props> = ({linkItem}) => {
    return <a 
        href={linkItem.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`w-full rounded-lg bg-indigo-800 text-white text-center leading-8`}
    >
        {linkItem.name}
    </a>
};

export default MvLinkButton;