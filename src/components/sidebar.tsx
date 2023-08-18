import MessageInput from "./message-input"
import Sessions from "./sessions"
import NewHeader from "./new-header"

export default function NewSideBar() {
    return (
        <div className="grid grid-rows-[auto_1fr] h-screen h-screen-ios overflow-y-auto">
            <div className="grid sticky top-0 border-b border-gray-200 bg-white">
            <NewHeader />
            </div>
            <div className="grid grid-rows-[1fr_auto]">
                <div className="grid">
                    <Sessions />
                    <div style={{height:2000}}>
                        <p>Other</p>
                    </div>
                </div>
                <div className="grid sticky bottom-0 min-h-[4rem]">
                    <MessageInput />
                </div>
            </div>
        </div>
    )
}