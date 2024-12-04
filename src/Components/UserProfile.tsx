import React from "react";


interface User {
  firstName: string;
  lastName: string;
  imageUrl: string;
  birthday: string;
  address: string;
  height: string;
  weight: string;
  index: number;
  position: string;
  candidate: string;
}

interface UserProfileProps {
  user: User | null;
  norma: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, norma }) => {
  if (!user) {
    return <p>Foydalanuvchi ma'lumoti yuklanmoqda...</p>;
  }

  return (
    <div className="flex gap-10">
      <img src={user.imageUrl} alt="User profile" loading="lazy" />
      <div className="flex flex-col justify-between">
        <h1 className="text-32px md:text-[44px] flex flex-col leading-[52px]">
          <span className="font-semibold">{user.firstName}</span>
          {user.lastName}
        </h1>
        <div className="flex justify-between text-[#495057] text-base md:text-xl">
          <div className="flex flex-col">
            <p>Тугилган сана:</p>
            <p>Тугилган жой:</p>
          </div>
          <div className="flex flex-col">
            <p>{user.birthday}</p>
            <p>{user.address}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="text-lg flex flex-col">
            Буйи:
            <span className="font-medium">{user.height}</span>
          </p>
          <p className="text-lg flex flex-col">
            Вазни:
            <span className="font-medium">{user.weight}</span>
          </p>
          <p className="text-lg flex flex-col">
            Индекс:
            <span className="font-medium">{user.index}</span>
          </p>
          <img src={norma} loading="lazy" alt="Norma" />
        </div>
        <div className="text-base md:text-xl">
          <span className="text-[#495057]">Лавозими:</span>
          <p className="text-[#212529]">{user.position}</p>
        </div>
        <div className="text-base md:text-xl">
          <span className="text-[#495057]">Номзод:</span>
          <p className="text-[#212529]">{user.candidate}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
