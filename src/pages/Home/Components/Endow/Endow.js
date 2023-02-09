import ListEndow from './ListEndow';

const Endows = [
    {
        id: 1,
        name: 'Free Shipping Method',
        description: 'With more 1000 CZK',
        icon: 'ti-package',
    },
    {
        id: 2,
        name: 'Secure Payment System',
        description: 'Safe Payment for customer',
        icon: 'ti-unlock',
    },
    {
        id: 3,
        name: 'Update Payment System',
        description: 'We always update for protecting information of customer',
        icon: 'ti-reload',
    },
];

export default function Endow() {
    return (
        <div className="shop-method-area section-padding30">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    {Endows.map((endow) => (
                        <ListEndow
                            key={endow.id}
                            id={endow.id}
                            name={endow.name}
                            description={endow.description}
                            icon={endow.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
