import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, } from 'office-ui-fabric-react/lib/Text'
import { Image } from 'office-ui-fabric-react/lib/Image'


const Details = (props) => {
    const {show} = props

    return (
        <div >
            {Object.keys(show).length !== 0 && 
                        <Card aria-label='Basic vertical card'>
                        <Card.Item>
                            <Card.Item fill>
                                <Image
                                    src={show.avatar}
                                    width='100%'
                                    alt='employee details'
                                />
                            </Card.Item>
                            <div class='flex-container'>
                                <div>
                                    <Text>ID : {show.id}</Text>
                                </div>
                                <div>
                                    <Text>
                                        Name : {show.first_name} {show.last_name}
                                    </Text>
                                </div>
                            </div>
                        </Card.Item>
                    </Card>}
        </div>
    )
}

export default Details