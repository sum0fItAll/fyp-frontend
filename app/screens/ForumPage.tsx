import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
    Card,
    Title,
    Paragraph,
    Divider,
    Avatar,
    IconButton,
    Text,
    Button,
    useTheme,
} from 'react-native-paper';
import moment from 'moment';

// Mock data. Replace it with actual data from your backend.
const posts = [
    {
        title: 'Post 1',
        description: 'This is the first post',
        author: 'Author 1',
        timeCreated: new Date(),
        likes: 10,
        comments: 5,
    },
    {
        title: 'Post 2',
        description: 'This is the first post',
        author: 'Author 2',
        timeCreated: new Date(),
        likes: 10,
        comments: 5,
    },
    {
        title: 'Post 3',
        description: 'This is the first post',
        author: 'Author 3',
        timeCreated: new Date(),
        likes: 10,
        comments: 5,
    },
    {
        title: 'Post 4',
        description: 'This is the first post',
        author: 'Author 4',
        timeCreated: new Date(),
        likes: 10,
        comments: 5,
    },
    // Add more posts...
];

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const ForumPage = () => {
    const { colors } = useTheme();
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            {posts.map((post, index) => (
                <Card
                    key={index}
                    style={[styles.card, { borderColor: colors.primary }]}>
                    <Card.Title
                        title={post.title}
                        subtitle={
                            post.author +
                            ' • ' +
                            moment(post.timeCreated).fromNow()
                        }
                        left={LeftContent}
                    />
                    <Divider style={styles.divider} />
                    <Card.Content>
                        <Paragraph>{post.description}</Paragraph>
                    </Card.Content>
                    <View style={styles.postBtm}>
                        <Card.Actions>
                            <Text variant="labelMedium">{post.likes}</Text>
                            <IconButton
                                icon="thumb-up"
                                size={16}
                                onPress={() => {}}
                            />
                            <Text variant="labelMedium">{post.comments}</Text>
                            <IconButton
                                icon="comment"
                                size={16}
                                onPress={() => {}}
                            />
                        </Card.Actions>
                        <View style={styles.readBtnContainer}>
                            <Button
                                mode="contained"
                                labelStyle={styles.readBtn}
                                onPress={() =>
                                    navigation.navigate('PostDetail', { post })
                                }>
                                View
                            </Button>
                        </View>
                    </View>
                </Card>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        marginVertical: 2,
        padding: 10,
    },
    card: {
        borderWidth: 0.22,
        marginHorizontal: 5,
        marginVertical: 6,
        padding: 2,
    },
    divider: {
        marginVertical: 10,
    },
    postBtm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    readBtnContainer: {
        marginRight: 10,
    },
    readBtn: {
        height: 20,
        fontSize: 13,
    },
});

export default ForumPage;
