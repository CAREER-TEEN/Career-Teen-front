"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    const chatIconClick = () => {
        router.push('/chat');
    }
    const logoIconClick = () => {
        router.push('/');
    }

    return (
        <header className="relative py-[30px]">
            <div className="px-[5%] md:px-[10%] h-20 mx-auto items-center justify-between font-preendard font-medium">
                <Image
                    src="/images/careerteenLogo.png"
                    alt="career teen"
                    width={176} 
                    height={0}
                    style={{ height: "auto" }}
                    className="mb-6"
                    onClick={logoIconClick}
                />
                <div className="flex relative font-{17px} text-gray-500">
                    <ul className="flex gap-8">
                        <li><a href="/club">스터디 그룹</a></li>
                        <li><a href="/board">게시판</a></li>
                        <li><a href="/my">마이페이지</a></li>
                    </ul>
                    <Image
                        onClick={chatIconClick}
                        src="/images/chat_icon.png"
                        alt="채팅"
                        width={20.98}
                        height={0}
                        style={{ height: "auto" }}
                        className="absolute right-0" />
                </div>
            </div>
        </header>
    )
}