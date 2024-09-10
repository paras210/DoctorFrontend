import React from 'react';
export default function SpecialtySelection(props) {
    const specialities = [
    'GENERAL_PHYSICIAN',
    'ALLERGY_AND_IMMUNOLOGY',
    'ANESTHESIOLOGY',
    'DERMATOLOGY',
    'DIAGNOSTIC_RADIOLOGY',
    'EMERGENCY_MEDICINE',
    'FAMILY_MEDICINE',
    'INTERNAL_MEDICINE',
    'MEDICAL_GENETICS',
    'NEUROLOGY',
    'NUCLEAR_MEDICINE',
    'GYNECOLOGY',
    'OPHTHALMOLOGY',
    'PATHOLOGY',
    'PEDIATRICS',
    'PHYSICAL_MEDICINE',
    'PREVENTIVE_MEDICINE',
    'PSYCHIATRY',
    'RADIATION_ONCOLOGY',
    'SURGERY',
    'UROLOGY',
    'CARDIOLOGIST',
    'DERMATOLOGIST',
    'NEUROLOGIST',
    'PEDIATRICIAN',
    'ORTHOPEDIC'
    ];

    const radiusRanges = [
        '10 km', '20 km', '30 km', '40 km', '50 km',
        '60 km', '70 km', '80 km', '90 km', '100 km'
    ];

    const handleSelection = (speciality) => {
        props.setSelectedSpeciality(speciality);
    };

    const handleSelect = (range) => {
        props.setSelectedRange(range);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    <h3 className="mb-4 text-center">Select a Speciality</h3>
                    <div className="row g-3">
                        {specialities.map((speciality, index) => (
                            <div key={index} className="col-6 col-md-4">
                                <button
                                    type="button"
                                    className={`btn w-100 ${props.selectedSpeciality === speciality ? 'btn-primary' : 'btn-outline-secondary'}`}
                                    onClick={() => handleSelection(speciality)}
                                >
                                    {speciality}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className="mb-4 text-center">Select Distance</h3>
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle w-100 color1Btn"
                            type="button"
                            id="radiusDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {props.selectedRange}
                        </button>
                        <ul className="dropdown-menu w-100" aria-labelledby="radiusDropdown">
                            {radiusRanges.map((range, index) => (
                                <li key={index}>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleSelect(range)}
                                    >
                                        {range}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
