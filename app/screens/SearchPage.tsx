import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Searchbar,
    Button,
    Card,
    Title,
    Paragraph,
    Divider,
    useTheme,
} from 'react-native-paper';

const SearchPage: React.FC = () => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            marginVertical: 0,
            padding: 0.25,
        },
        searchContainer: {
            padding: 14,
            marginHorizontal: 4,
        },
        categoryContainer: {
            marginHorizontal: 4,
            padding: 14,
        },
        categoryButtonContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 4,
        },
        categoryButton: {
            alignItems: 'baseline',
            alignSelf: 'center',
            marginVertical: 3,
            marginHorizontal: 3,
            // marginRight: 6,
            // marginBottom: 6,
        },
        recommendedContainer: {
            // flex: 1,
            padding: 14,
            marginHorizontal: 4,
        },
        recommendedScrollView: {
            // flexGrow: 1,
            // marginTop: 8,
        },
        cardContainer: {
            marginHorizontal: 2,
            // padding: 2,
            marginVertical: 2,

            // paddingBottom: 16,
        },
        card: {
            width: 150,
            marginHorizontal: 8,
            marginVertical: 8,
            borderWidth: 0.50,

            // borderRadius: 5,  // Add optional border radius for rounded corners
            // shadowColor: '#ccc',  // Optional shadow
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
        },
        cardContent: {
            color: colors.primary,
            backgroundColor: colors.surface,
        },
        //   card: {
        //     marginTop: 16,
        //   },
        divider: {
            marginVertical: 2,
        },
        searchBar: {
            borderWidth: 1,
            borderColor: '#8888',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Searchbar
                    mode="bar"
                    iconColor={colors.onPrimary}
                    style={[
                        styles.searchBar,
                        { backgroundColor: colors.primary },
                    ]}
                    placeholder="Search for books"
                    placeholderTextColor={colors.onPrimary}
                    theme={{ colors: { primary: colors.primary } }}
                />
            </View>
            <Divider
                style={[styles.divider, { backgroundColor: colors.onSurface }]}
            />

            <View style={styles.categoryContainer}>
                <Title style={[{ color: colors.primary }]}>Categories</Title>
                <View style={styles.categoryButtonContainer}>
                    <Button mode="contained" style={styles.categoryButton}>
                        Business
                    </Button>
                    <Button mode="contained" style={styles.categoryButton}>
                        Self-Improvement
                    </Button>
                    <Button mode="contained" style={styles.categoryButton}>
                        Fiction
                    </Button>
                    <Button mode="contained" style={styles.categoryButton}>
                        Psychology
                    </Button>
                    <Button mode="contained" style={styles.categoryButton}>
                        Art
                    </Button>
                    <Button mode="contained" style={styles.categoryButton}>
                        Fiction
                    </Button>
                    <Button mode="contained" style={styles.categoryButton}>
                        Fiction
                    </Button>
                    {/* Add more categories as needed */}
                </View>
            </View>
            <Divider
                style={[styles.divider, { backgroundColor: colors.onSurface }]}
            />

            {/* Recommended Section */}
            <View style={styles.recommendedContainer}>
                <Title style={[{ color: colors.primary }]}>Recommended</Title>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.cardContainer}>
                    {/* Sample Book Cards (Replace with actual manga data) */}
                    <Card
                        style={[styles.card, { borderColor: colors.primary }]}>
                        <Card.Cover
                            source={require('./../../assets/cover2.jpg')}
                            resizeMethod="scale"
                        />
                        <Card.Content style={styles.cardContent}>
                            <Paragraph
                                style={{
                                    color: colors.primary,
                                    fontWeight: 'bold',
                                }}>
                                Long Book Name
                            </Paragraph>
                        </Card.Content>
                    </Card>
                    <Card
                        style={[styles.card, { borderColor: colors.primary }]}>
                        <Card.Cover
                            source={require('./../../assets/cover1.jpg')}
                            resizeMethod="auto"
                            resizeMode="cover"
                        />
                        <Card.Content>
                            <Paragraph>Book Title</Paragraph>
                        </Card.Content>
                    </Card>
                    <Card
                        style={[styles.card, { borderColor: colors.primary }]}>
                        <Card.Cover
                            source={require('./../../assets/cover3.jpg')}
                            resizeMethod="auto"
                            resizeMode="cover"
                        />
                        <Card.Content>
                            <Paragraph>Book Title</Paragraph>
                        </Card.Content>
                    </Card>
                    <Card
                        style={[styles.card, { borderColor: colors.primary }]}>
                        <Card.Cover
                            source={require('./../../assets/cover4.jpg')}
                            resizeMethod="auto"
                            resizeMode="cover"
                        />
                        <Card.Content>
                            <Paragraph>Book Title</Paragraph>
                        </Card.Content>
                    </Card>
                    {/* Add more manga cards for the category */}
                </ScrollView>
            </View>

            {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendedScrollView}
          >
            <Card style={styles.card}>
              <Card.Content>
                <Title>Book Title 1</Title>
                <Paragraph>Author Name</Paragraph>
                <Divider style={styles.divider} />
                <Paragraph>Description of the book goes here.</Paragraph>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Content>
                <Title>Book Title 2</Title>
                <Paragraph>Author Name</Paragraph>
                <Divider style={styles.divider} />
                <Paragraph>Description of the book goes here.</Paragraph>
              </Card.Content>
            </Card>

          </ScrollView> */}
            {/* <View style={styles.recommendedContainer}>
          <Title>Recommended</Title>

          <Card>
            <Card.Content>
              <Title>Book Title 1</Title>
              <Paragraph>Author Name</Paragraph>
              <Divider style={styles.divider} />
              <Paragraph>Description of the book goes here.</Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title>Book Title 2</Title>
              <Paragraph>Author Name</Paragraph>
              <Divider style={styles.divider} />
              <Paragraph>Description of the book goes here.</Paragraph>
            </Card.Content>
          </Card>

        </View> */}
        </View>
    );

};


export default SearchPage;
