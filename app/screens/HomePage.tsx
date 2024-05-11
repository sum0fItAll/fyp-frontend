import React, { useState } from 'react';
import {
    View,
    ScrollView,
    // TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import {
    Button,
    Card,
    Title,
    Paragraph,
    Divider,
    useTheme,
    // TouchableRipple,
} from 'react-native-paper';
// import { BookDetailsPage } from '.';

import { useNavigation } from '@react-navigation/native';

async function fetchBookCategories() {
    // Fetch book categories from the server
    // Replace this with actual fetch logic
    return [
        { id: 1, title: 'Action' },
        { id: 2, title: 'Adventure' },
        { id: 3, title: 'Romance' },
        { id: 4, title: 'Comedy' },
        // Add more categories as needed
    ];
}

async function fetchBooksByCategory(categoryId: number) {
    // Fetch books by category from the server
    // Replace this with actual fetch logic
    return [
        {
            id: 1,
            title: 'Sample Book Title',
            cover: require('./../../assets/cover7.jpg'),
        },
        {
            id: 2,
            title: 'Sample Book Title',
            cover: require('./../../assets/cover6.jpg'),
        },
        {
            id: 3,
            title: 'Sample Book Title',
            cover: require('./../../assets/cover3.jpg'),
        },
        {
            id: 4,
            title: 'Sample Book Title',
            cover: require('./../../assets/cover4.jpg'),
        },
        // Add more books as needed
    ];
}

// Sample data for book categories
const bookCategories = [
    { id: 1, title: 'Action' },
    { id: 2, title: 'Adventure' },
    { id: 3, title: 'Romance' },
    { id: 4, title: 'Comedy' },
    // Add more categories as needed
];

const HomePage: React.FC = () => {
    const { colors } = useTheme();
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();
    // const [userLibrary, setUserLibrary] = useState([]);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <Title
                        style={[styles.headerTitle, { color: colors.primary }]}>
                        Categories
                    </Title>
                    <TouchableWithoutFeedback
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}>
                        <Button
                            mode={isPressed ? 'contained' : 'outlined'}
                            style={styles.createCategoryButton}>
                            New Category
                        </Button>
                    </TouchableWithoutFeedback>
                </View>
                <Divider style={[{ backgroundColor: colors.onSurface }]} />
                {/* Render each book category */}
                {bookCategories.map(category => (
                    <View key={category.id}>
                        <Title
                            style={[
                                styles.categoryTitle,
                                { color: colors.primary },
                            ]}>
                            {category.title}
                        </Title>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.cardContainer}>
                            {/* Sample book Cards (Replace with actual book data) */}
                            <Card
                                style={[
                                    styles.card,
                                    { borderColor: colors.primary },
                                ]}
                                onPress={() => navigation.navigate('BookDetails', { bookId: '1', bookTitle: 'Sample Book Title' })}>
                                {/* // onPress={() => navigation.navigate('BookDetailsScreen', { book: bookCategories})}> */}
                                <Card.Cover
                                    source={require('./../../assets/cover7.jpg')}
                                    resizeMethod="auto"
                                    resizeMode="cover"
                                />
                                <Card.Content>
                                    <Paragraph
                                        style={{
                                            color: colors.primary,
                                            fontWeight: 'bold',
                                        }}>
                                        book Title
                                    </Paragraph>
                                </Card.Content>
                            </Card>
                            <Card
                                style={[
                                    styles.card,
                                    { borderColor: colors.primary },
                                ]}>
                                <Card.Cover
                                    source={require('./../../assets/cover6.jpg')}
                                    resizeMethod="auto"
                                    resizeMode="cover"
                                />
                                <Card.Content>
                                    <Paragraph>book Title</Paragraph>
                                </Card.Content>
                            </Card>
                            <Card
                                style={[
                                    styles.card,
                                    { borderColor: colors.primary },
                                ]}>
                                <Card.Cover
                                    source={require('./../../assets/cover3.jpg')}
                                    resizeMethod="auto"
                                    resizeMode="cover"
                                />
                                <Card.Content>
                                    <Paragraph>book Title</Paragraph>
                                </Card.Content>
                            </Card>
                            <Card
                                style={[
                                    styles.card,
                                    { borderColor: colors.primary },
                                ]}>
                                <Card.Cover
                                    source={require('./../../assets/cover4.jpg')}
                                    resizeMethod="auto"
                                    resizeMode="cover"
                                />
                                <Card.Content>
                                    <Paragraph>book Title</Paragraph>
                                </Card.Content>
                            </Card>
                            {/* Add more book cards for the category */}
                        </ScrollView>
                        <Divider
                            style={[
                                styles.divider,
                                { backgroundColor: colors.onSurface },
                            ]}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
        paddingHorizontal: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        marginLeft: 8,
        paddingHorizontal: 2,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0,
    },
    createCategoryButton: {
        alignSelf: 'flex-start',
        height: 45,
        marginRight: 0,
        padding: 0,
    },
    categoryTitle: {
        marginLeft: 12,
        marginTop: 8,
        fontSize: 20, // Adjust font size if needed
    },
    cardContainer: {
        marginLeft: 8,
        marginTop: 8, // Adjust the gap between title and cards as needed
        marginBottom: 8,
        // paddingBottom: 16,
    },
    card: {
        width: 150,
        marginRight: 8, // Adjust the gap between cards as needed
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 8,
        borderWidth: 0.35,
    },
    contentContainer: {
        flexGrow: 1,
    },
    divider: {
        marginVertical: 8,
    },
});

export default HomePage;
