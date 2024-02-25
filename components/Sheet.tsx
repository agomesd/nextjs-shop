import {
  Sheet as SheetCN,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetHeaderProps,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  DialogProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogContentProps,
  DialogTriggerProps,
} from "@radix-ui/react-dialog";

interface SheetProps {
  contentProps?: DialogContentProps;
  descriptionProps?: DialogDescriptionProps;
  headerProps?: SheetHeaderProps;
  sheetProps?: DialogProps;
  titleProps?: DialogTitleProps;
  triggerProps?: DialogTriggerProps;
}

export function Sheet({
  contentProps,
  descriptionProps,
  headerProps,
  sheetProps,
  titleProps,
  triggerProps,
}: SheetProps) {
  return (
    <SheetCN {...sheetProps}>
      <SheetTrigger asChild {...triggerProps}>
        {triggerProps?.children}
      </SheetTrigger>
      <SheetContent {...contentProps}>
        {" "}
        <SheetHeader {...headerProps}>
          <SheetTitle {...titleProps}>{titleProps?.children}</SheetTitle>
          <SheetDescription {...descriptionProps}>
            {descriptionProps?.children}
          </SheetDescription>
        </SheetHeader>
        {contentProps?.children}
      </SheetContent>
    </SheetCN>
  );
}
