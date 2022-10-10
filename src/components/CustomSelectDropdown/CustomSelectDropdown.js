import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from "react-native-select-dropdown";

const CustomSelectDropdown = ({data, setSelected}) => {
    const renderDropdownIcon = (isOpened) =>
        <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} size={18} />

    return (
        <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => setSelected(index)}
            defaultButtonText={'Pilih Periode'}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={isOpened => renderDropdownIcon(isOpened) }
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
        />
    );
}

const styles = StyleSheet.create({
    dropdownBtnStyle: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        borderWidth: 1
      },
    dropdownBtnTxtStyle: {
        textAlign: 'left',
    },
        dropdownDropdownStyle: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    dropdownRowTxtStyle: {
        textAlign: 'left',
    },
});

export default CustomSelectDropdown;
