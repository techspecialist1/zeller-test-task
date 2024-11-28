import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {styles} from './style';

import {STRINGS} from '../../../utils/constants';
import {
  ActivityIndicator,
  Container,
  ListView,
  RadioButton,
  SearchInput,
  ErrorBox,
} from '../../molecules';
import {useQuery} from '@apollo/client';
import {LIST_ZELLER_ITEMS} from '../../../network/graphql/queries/queries';
import {RootStackProps} from '../../../navigation/homeStackNavigator';

type HomePageNavigationProps = NavigationProp<RootStackProps, 'Home'>;

type HomePageProps = {
  navigation: HomePageNavigationProps;
};

type ItemTypes = {
  id: string;
  role: string;
  name: string;
};

const HomePage: React.FC<HomePageProps> = ({navigation}) => {
  const {data, loading, refetch, error} = useQuery(LIST_ZELLER_ITEMS);
  const [userList, setUserList] = useState([]);
  const [searchText, setSearchText] = useState<string>('');
  const [activeRadioBtn, setActiveRadioBtn] = useState<string>(
    STRINGS.ADMIN,
  );

  const {items: users} = data?.listZellerCustomers || {};

  const handleSearchTextChange = useCallback(
    (text: string) => {
      setSearchText(text);
      const filterlist = users
        ? users?.filter((val: any) => {
            return text.length > 0
              ? val.name?.toLowerCase().includes(text.toLowerCase()) &&
                  val.role === activeRadioBtn
              : val.role === activeRadioBtn;
          })
        : [];
      setUserList(filterlist);
    },
    [users, activeRadioBtn],
  );

  // filter list after half second once user stop typing
  useEffect(() => {
    const delay = setTimeout(
      () => {
        if (activeRadioBtn || searchText) {
          handleSearchTextChange(searchText);
        }
      },
      searchText?.length ? 500 : 0,
    );
    return () => clearTimeout(delay);
  }, [activeRadioBtn, handleSearchTextChange, users, searchText]);

  const renderItem = useCallback(
    ({item}: {item: ItemTypes}) => {
      return (
        <ListView
          key={item?.id}
          item={item}
          onPress={() => navigation.navigate('Details')}
        />
      );
    },
    [navigation],
  );

  return (
    <Container>
      <ActivityIndicator isVisible={loading} />

      <View style={styles.userTypeView}>
        <Text style={styles.userTypeText}>{STRINGS.USER_TYPE}</Text>
      </View>

      <RadioButton
        label={STRINGS.ADMIN}
        onChange={(value: React.SetStateAction<string>) => {
          setActiveRadioBtn(value);
        }}
        activeButton={activeRadioBtn}
        radioSize={20}
      />
      <RadioButton
        onChange={(value: React.SetStateAction<string>) => {
          setActiveRadioBtn(value);
        }}
        radioSize={20}
        activeButton={activeRadioBtn}
        label={STRINGS.MANAGER}
      />

      <View style={styles.line} />
      <SearchInput
        placeholder={STRINGS.SEARCH_TEXT}
        onChangeText={val => handleSearchTextChange(val)}
      />
      <View style={styles.listView}>
        {activeRadioBtn && (
          <View style={styles.userNameView}>
            <Text style={styles.listUserTest}>
              {activeRadioBtn} {STRINGS.USER}
            </Text>
            {error ? (
              <TouchableOpacity onPress={() => refetch()}>
                <Text style={styles.refreshTest}>Refresh</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
        {error ? (
          <ErrorBox text={error?.message} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={userList}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => refetch()}
              />
            }
          />
        )}
      </View>
    </Container>
  );
};

export default HomePage;
