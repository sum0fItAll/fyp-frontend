import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Portal, Modal } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
// import ProgressCircle from 'react-native-progress/Circle';

interface ActivityIndicatorProps {
    theme: any;
    visible: boolean;
}

const CustomActivityIndicator: React.FC<ActivityIndicatorProps> = ({ theme, visible }) => {
    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={() => { }}
                dismissable={false}
                // style={{ backgroundColor: theme.colors.onSurface }}

                // contentContainerStyle={{ backgroundColor: theme.colors.onSurface }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator
                            size="large"
                            animating={visible}
                            color={theme.colors.surface}
                            style={{alignSelf: 'center'}}
                        />
                    </View>
                </View>
            </Modal>
        </Portal>
        // <Modal
        //     visible={visible}
        //     transparent={true}
        //     animationType="fade"
        //     onRequestClose={() => { }}>
        //     <View style={styles.centeredView}>
        //         <View style={styles.modalView}>
        //             {/* <ProgressCircle
        //                 size={100}
        //                 indeterminate={visible}
        //                 color={theme.colors.primary}
        //             /> */}
        //             {/* <ActivityIndicator
        //                 size="large"
        //                 animating={visible}
        //                 color={theme.colors.onSurface}
        //             /> */}

        //             <ActivityIndicator
        //                 size="large"
        //                 animating={visible}
        //                 color={theme.colors.onSurface}
        //                 style={{alignSelf: 'center'}}
        //             />
        //         </View>
        //     </View>
        // </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
});

export default CustomActivityIndicator;
