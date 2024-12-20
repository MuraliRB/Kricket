import { Flex } from "@chakra-ui/react";
import React from "react";

interface FlexLayoutProps {
  children: React.ReactNode;
  direction?: string;
  justifyItems?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  gap?: number;
}

export default function FlexLayout({
  children,
  alignItems,
  alignContent,
  direction,
  gap,
  justifyContent,
  justifyItems,
}: FlexLayoutProps) {
  return (
    <Flex
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      justifyItems={justifyItems}
      gap={gap}
    >
      {children}
    </Flex>
  );
}
