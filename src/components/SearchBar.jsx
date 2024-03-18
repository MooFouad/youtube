import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [searchTearm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTearm){
            navigate(`/search/${searchTearm}`)
            setSearchTerm('')
        }
    }
    return (
        <Paper
            component='form'
            onSubmit={handleSubmit }
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
                display:'flex'
            }}
        >
            <input
                className='search-bar'
                type="search"
                placeholder='Search...'
                value={searchTearm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton
                type="submit"
                sx={{
                    p: '10px',
                    color:'red'
                }}
            >
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar