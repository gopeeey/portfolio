import dynamic from "next/dynamic";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function NoSSRWrapper(props: Props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export default dynamic(() => Promise.resolve(NoSSRWrapper), { ssr: false });
