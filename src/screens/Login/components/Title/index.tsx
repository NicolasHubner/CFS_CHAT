import { colorsPattern } from '@/styles/colors';
import { Box, Text } from 'native-base';

export const Title = () => {
    return (
        <Box mb={8}>
            <Text
                color={colorsPattern.blue}
                fontSize={40.33}
                fontWeight={'bold'}
                lineHeight={60.49}
                letterSpacing={2}
                textAlign={'center'}>
                Faça login
            </Text>

            <Text
                color={colorsPattern.blue}
                fontSize={14.33}
                fontWeight={'normal'}
                lineHeight={21.49}
                letterSpacing={1}
                textAlign={'center'}>
                seja bem-vindo novamente.
            </Text>
        </Box>
    );
};
