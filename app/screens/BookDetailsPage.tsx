// import React, { useState, useEffect } from 'react';
// import { View, Image, StyleSheet } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import { Button, Card, Title, Paragraph } from 'react-native-paper';
// import axios from 'axios';
// import { XMLParser } from 'fast-xml-parser';

// interface Book {
//     bookId: string;
//     author: {
//         id: string;
//         name: string;
//     };
//     avgRating: string;
//     numPages: string;
//     imageUrl: string;
// }

// interface BookDetailsScreenProps {
//     navigation: any;
//     route: {
//         params: {
//             book: Book;
//         };
//     };
// }

// const parser = new XMLParser();

// const BookDetailsPage: React.FC<BookDetailsScreenProps> = ({ navigation, route }) => {
//     const { book } = route.params;
//     const { colors } = useTheme();
//     const [fullBook, setFullBook] = useState<any>(null);
//     const [author, setAuthor] = useState<any>(null);

//     useEffect(() => {
//         // Book details
//         axios.get(`https://www.goodreads.com/book/show/${book.bookId}.xml?key=Bi8vh08utrMY3HAqM9rkWA`)
//         .then((resp) => {
//             const data = parser.parse(resp.data);
//             setFullBook(data?.GoodreadsResponse?.book);
//         })
//         .catch((error) => {
//             console.log('Failed to get book details:', error);
//         });

//         // Author details
//         axios.get(`https://www.goodreads.com/author/show.xml?key=Bi8vh08utrMY3HAqM9rkWA&id=${book.author.id}`)
//         .then((resp) => {
//             const data = parser.parse(resp.data);
//             setAuthor(data?.GoodreadsResponse?.author);
//         })
//         .catch((error) => {
//             console.log('Failed to get author details:', error);
//         });
//     }, [book]);

//     return (
//         <View style={{ flex: 1, backgroundColor: colors.background }}>
//         <Card>
//             <Card.Cover source={require('./../../assets/cover1.jpg')} />
//             <Card.Content>
//             <Title>{fullBook?.title || 'Loading...'}</Title>
//             <Paragraph>{fullBook?.description || 'Loading...'}</Paragraph>
//             </Card.Content>
//             <Card.Actions>
//             <Button onPress={() => navigation.goBack()}>Back</Button>
//             </Card.Actions>
//         </Card>
//         </View>
//     );
// }

// export default BookDetailsPage;



import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
// import Animated from 'react-native-reanimated';

const BookDetailsPage = ({ route }) => {
    const { bookId, bookTitle } = route.params;

    // Fetch the book's details using the bookId
    // For now, we'll just hardcode some data
    const book = {
        id: bookId,
        title: bookTitle,
        author: 'Book Author',
        description: 'Book Description',
    };

    // Create an animated value
    const animatedValue = new Animated.Value(0);

    // Start the animation
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
    }).start();

    return (
        <Animated.View style={{ opacity: animatedValue }}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title>{book.title}</Title>
                    <Text>{book.author}</Text>
                    <Paragraph>{book.description}</Paragraph>
                </Card.Content>
            </Card>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
    },
});

export default BookDetailsPage;
