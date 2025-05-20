import { formatDate } from "@/utils";
import { View, Text, Image } from "react-native";

interface TransactionItemProps {
    amount: number;
    date: Date;
    title: string;
}

const TransactionItem = (props: TransactionItemProps) => {
    return (
        <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-2">
                <View className="w-12 h-12 bg-transaction-bg flex items-center justify-center rounded-lg">
                    <Image
                        source={require("../assets/images/Coin.png")}
                        className="w-10 h-10 rounded-lg"
                        resizeMode="cover"
                    />
                </View>
                <View>
                    <Text className="text-black font-medium">{props.title}</Text>
                    <Text className="text-slate-500 text-xs">
                        {formatDate(props.date)}
                    </Text>
                </View>
            </View>
            <Text
                className={`
                ${props.amount > 0 ? "text-money-green" : "text-money-red"
                    } font-semibold text-lg`}
            >
                {props.amount > 0
                    ? `+ $${props.amount}`
                    : ` - $${Math.abs(props.amount)}`}
            </Text>
        </View>
    );
};

export default TransactionItem;
