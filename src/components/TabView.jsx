import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export default function VerticalTabsWithIcon() {
    const data = [
        {
            label: "Quản lý lịch học của bạn",
            desc: "Với ILearn, bạn dễ dàng quản lý lịch học và nhận thông báo nhắc nhở đầy đủ, chính xác. Bạn sẽ không bao giờ quên lịch học nữa!",
            value: "feature1",
            icon: Square3Stack3DIcon,
            imgSrc: "/src/assets/screen2.png",
        },
        {
            label: "Kiểm tra thông số môi trường xung quanh",
            desc: "Cảm biến thông minh của ILearn tự động điều chỉnh độ sáng và nhiệt độ phòng, giúp bạn tập trung và tiếp thu kiến thức hiệu quả hơn.",
            value: "feature2",
            icon: UserCircleIcon,
            imgSrc: "/src/assets/screen3.png",
        },
        {
            label: "Kiểm tra tư thế ngồi của bạn",
            desc: "Với tính năng AI kiểm tra tư thế ngồi thông qua camera, ILearn giúp bạn duy trì tư thế học tập đúng cách, bảo vệ sức khỏe và nâng cao hiệu quả học tập.",
            value: "feature3",
            icon: Cog6ToothIcon,
            imgSrc: "/src/assets/screen4.png",
        },
    ];
    return (
        <Tabs value="feature1" orientation="vertical" style={{ backgroundColor: 'transparent' }} className="max-w-screen-xl mx-auto pt-10">
            <TabsHeader style={{ backgroundColor: 'transparent' }} className="flex flex-col justify-center gap-10">
                {data.map(({ label, value, icon, desc }) => (
                    <Tab key={value} value={value} style={{ alignSelf: 'start', backgroundColor: 'transparent' }}>
                        <div className="flex items-center gap-2">
                            {React.createElement(icon, { className: "w-10 h-10" })}
                            <strong style={{ color: "blue" }}>{label}</strong>

                        </div>
                        {desc}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, imgSrc }) => (
                    <TabPanel key={value} value={value} className="py-0 flex justify-center">
                        <img src={imgSrc} alt={value} width="300" />
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs >
    );
}