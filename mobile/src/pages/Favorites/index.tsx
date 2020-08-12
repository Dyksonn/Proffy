import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites')
      .then(response => {
        if(response) {
          const favoritedTeachers = JSON.parse(response);
          
          setFavorites(favoritedTeachers);
        }
      })
  }

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map((teachers: Teacher) => (
          <TeacherItem 
            key={teachers.id} 
            teacher={teachers} 
            favorited
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Favorites;