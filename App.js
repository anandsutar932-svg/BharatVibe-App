import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function App() {
  const [tab, setTab] = useState('Home');
  const tabs = ['Home','Vibes','Create','Explore','Profile'];
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light"/>
      <View style={styles.header}>
        <Text style={styles.logo}>🇮🇳 BharatVibe</Text>
        <Text style={styles.tag}>Made for India</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{tab}</Text>
        {tab === 'Home' && [1,2,3].map(i => (
          <View style={styles.card} key={i}>
            <Text style={styles.user}>BharatVibe User</Text>
            <View style={styles.post}><Text style={styles.postText}>🇮🇳 BharatVibe post {i}</Text></View>
            <Text style={styles.actions}>♡ Like    💬 Comment    ↗ Share</Text>
          </View>
        ))}
        {tab === 'Vibes' && <View style={styles.card}><Text style={styles.big}>🎬 Vibes / Reels</Text><Text style={styles.muted}>Short videos will appear here.</Text></View>}
        {tab === 'Create' && <View style={styles.card}><Text style={styles.big}>＋ Create Post</Text><Text style={styles.muted}>Photo and video upload will be added next.</Text></View>}
        {tab === 'Explore' && <View style={styles.card}><Text style={styles.big}>🔍 Explore</Text><Text style={styles.muted}>Trending Indian content will appear here.</Text></View>}
        {tab === 'Profile' && <View style={styles.card}><Text style={styles.big}>👤 Your Profile</Text><Text style={styles.muted}>Followers • Following • Posts</Text></View>}
      </ScrollView>
      <View style={styles.nav}>
        {tabs.map(t => <Pressable key={t} onPress={()=>setTab(t)} style={styles.navItem}><Text style={[styles.navText, tab===t && styles.active]}>{t}</Text></Pressable>)}
      </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
 safe:{flex:1,backgroundColor:'#0b0f14'},header:{padding:18,borderBottomWidth:1,borderBottomColor:'#202832'},
 logo:{color:'#fff',fontSize:22,fontWeight:'800'},tag:{color:'#9aa6b2',marginTop:3},content:{padding:16,paddingBottom:100},
 title:{color:'#fff',fontSize:26,fontWeight:'800',marginBottom:14},card:{backgroundColor:'#151c24',borderRadius:16,padding:16,marginBottom:14},
 user:{color:'#fff',fontWeight:'700',marginBottom:12},post:{height:220,borderRadius:12,backgroundColor:'#26313d',alignItems:'center',justifyContent:'center'},
 postText:{color:'#fff',fontSize:20,fontWeight:'700'},actions:{color:'#c8d1da',marginTop:12},big:{color:'#fff',fontSize:22,fontWeight:'800',marginBottom:8},muted:{color:'#9aa6b2'},nav:{position:'absolute',left:0,right:0,bottom:0,height:72,backgroundColor:'#10161d',flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderTopWidth:1,borderTopColor:'#202832'},navItem:{padding:8},navText:{color:'#7f8b97',fontSize:12},active:{color:'#fff',fontWeight:'800'}
});
