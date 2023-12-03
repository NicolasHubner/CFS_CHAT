import { colorsPattern } from '@/styles/colors';
import { Box, Text } from 'native-base';

export const TextInputs = ({ textInput }: { textInput: string }) => {
    return (
        <Box
            w={{
                base: '90%',
                md: '25%',
            }}>
            <Text
                color={colorsPattern.blue}
                fontSize={14.33}
                fontWeight={'500'}
                lineHeight={21.49}
                mb={2}
                letterSpacing={1}
                textAlign={'left'}>
                {textInput}
            </Text>
        </Box>
    );
};
