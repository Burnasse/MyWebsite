import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import HeroSection from '../components/HeroSection'

const reposNames = ['DuelCounter-MobileApplication', 'ProjetWEB_amu_CollaborativeMusic', 'Ascenseur']

const IndexPage = () => {
  const [repos, setRepos] = useState([])

  const getRepos = () => {
    axios.get('https://api.github.com/users/Burnasse/repos')
      .then((response) => {
        const result = response.data.filter(({name}) => reposNames.find(element => element === name))
        console.log(result)
        setRepos(result)
      })
  }

  useEffect(() => getRepos(), [])

  return (
    <Layout title="Tommy Lecourt" description="Tommy Lecourt Student">
      <HeroSection />
    </Layout>
  );
}

export default IndexPage
