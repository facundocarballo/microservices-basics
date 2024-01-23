import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import components from './componets';
import { styles } from '.';


const theme = extendTheme({colors, styles, components});

export default theme;