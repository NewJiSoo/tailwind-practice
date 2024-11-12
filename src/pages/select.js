import { Select, SelectItem } from "@nextui-org/react";

function select() {

  return (
    <div className='p-10'>
      <Select
        className="max-w-xs "
        aria-label="Versoion selection"
        placeholder="모든 타입"
        variant="bordered"
        classNames={{
          trigger: [
            "min-h-16",
            "data-[hover=true]:border-codeit_purple",
            "data-[open=true]:border-codeit_purple",
            "data-[focus=true]:border-codeit_purple",
            "data-[open=true]:rounded-b-none",
          ],
          listbox: "p-0",
          // select 아이콘 - 예:^
          selectorIcon: ["!ease-in-out", "duration-[250ms]"]
        }}

        // 드롭다운 메뉴 
        popoverProps={{
          // select와 selecitems의 간격
          offset: 0,
          classNames: {
            content: "p-0 rounded-t-none overflow-hidden",
          },
        }}

        // select 리스트 요소
        listboxProps={{
          itemClasses: {
            base: [
              "text-default-400",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",

              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          }
        }}
      >
        <SelectItem showDivider>모든 타입</SelectItem>
        <SelectItem showDivider>Legacy</SelectItem>
        <SelectItem showDivider>Version1</SelectItem>
        <SelectItem showDivider>Version2</SelectItem>
        <SelectItem >Version3</SelectItem>
      </Select>
    </div >
  )
}

export default select