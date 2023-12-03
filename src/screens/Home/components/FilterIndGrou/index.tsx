import { colorsPattern } from '@/styles/colors';
import { Button, Text, View } from 'native-base';

interface FilterButtonsProps {
    setIsGroup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ setIsGroup }: FilterButtonsProps) => {
    return (
        <View flexDir={'row'} w={'100%'} justifyContent={'space-around'} alignItems={'center'}>
            <Button
                w={'45%'}
                p={0}
                h={8}
                rounded={12}
                bgColor={colorsPattern.blue}
                _text={{
                    color: '#fff',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    bold: true,
                }}
                onPress={() => setIsGroup(false)}
                _pressed={{
                    backgroundColor: 'blue.500',
                }}>
                Indiviudal
            </Button>

            <Button
                w={'45%'}
                p={0}
                h={8}
                rounded={12}
                bgColor={colorsPattern.blue}
                _text={{
                    color: '#fff',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    bold: true,
                }}
                onPress={() => setIsGroup(true)}
                _pressed={{
                    backgroundColor: 'blue.500',
                }}>
                Grupo
            </Button>
        </View>
    );
};
