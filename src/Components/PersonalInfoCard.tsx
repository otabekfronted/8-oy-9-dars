import { useEffect, useState } from "react";
import axios from "axios";

interface UserInfo {
    id: number; // Har bir foydalanuvchiga noyob ID kerak bo'ladi
    firstName: string;
    lastName: string;
    fatherName: string;
    birthday: string;
    address: string;
    height: string;
    weight: string;
    index: string;
    position: string;
    candidate: string;
    imageUrl: string;
}

const PersonalInfoCard = () => {
    const [users, setUsers] = useState<UserInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<UserInfo[]>(
                    "https://trello.vimlc.uz/get-personal-info"
                );
                setUsers(response.data);
                setLoading(false);
                console.log("API Response:", response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p className="text-center">Yuklanmoqda...</p>;
    }

    if (users.length === 0) {
        return <p className="text-center">Ma'lumot topilmadi</p>;
    }

    return (
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.length > 0 &&
                users.map((user) => (
                    <div
                        key={user.id}
                        className="flex bg-white shadow-md rounded-lg p-6"
                    >
                        <img
                            src={user.imageUrl}
                            alt={`${user.firstName} ${user.lastName}`}
                            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-lg object-cover"
                        />
                        <div className="ml-6">
                            <h1 className="text-2xl font-bold">
                                {user.firstName} {user.lastName}
                            </h1>
                            <h2 className="text-lg font-medium text-gray-600">
                                {user.fatherName} ўғли
                            </h2>
                            <p className="text-gray-500 mt-2">
                                <b>Туғилган сана:</b> {user.birthday}
                            </p>
                            <p className="text-gray-500">
                                <b>Туғилган жой:</b> {user.address}
                            </p>
                            <div className="flex items-center gap-4 mt-4">
                                <p className="text-gray-600">
                                    <b>Бўйи:</b> {user.height}см
                                </p>
                                <p className="text-gray-600">
                                    <b>Вазни:</b> {user.weight}кг
                                </p>
                                <p className="text-gray-600">
                                    <b>Индекс:</b> {user.index}
                                </p>
                            </div>
                            <p className="text-gray-500 mt-4">
                                <b>Лавозими:</b> {user.position}
                            </p>
                            <p className="text-gray-500">
                                <b>Номзод:</b> {user.candidate}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PersonalInfoCard;
