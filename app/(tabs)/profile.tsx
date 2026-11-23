import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-foreground text-lg">Profil</Text>
    </View>
  );
}

