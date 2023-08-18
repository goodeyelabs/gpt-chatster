import MessageInput from "./message-input"
import Sessions from "./sessions"
import NewHeader from "./new-header"

export default function NewSideBar({ closeOverlay }: { closeOverlay:React.MouseEventHandler}) {
    return (
        <div className="grid grid-rows-[auto_1fr] h-screen h-screen-ios overflow-y-auto">
            <div className="grid sticky top-0 border-b border-gray-200 bg-white h-[4rem] px-5 md:px-8 xl:px-12 2xl:px-16 items-center">
                <p onClick={closeOverlay}>Close this modal</p>
            </div>
            <div className="grid grid-rows-[1fr_auto]">
                <div className="grid">
                    <Sessions />
                </div>
                <div className="grid sticky bottom-0 min-h-[4rem] border-t border-neutral-200 items-center">
                    <p>How's the font size?</p>
                </div>
            </div>
        </div>
    )
}